import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamHomePage } from './team-home.page';

const routes: Routes = [
  {
      path: '',
      component: TeamHomePage,
      children: [
          {
              path: 'team-detail',
              children: [
                  {
                      path: '',
                      loadChildren: () => import('../team-detail/team-detail.module').then(m => m.TeamDetailPageModule)
                  }
              ]
          },
          {
              path: 'standings',
              children: [
                  {
                      path: '',
                      loadChildren: () => import('../standings/standings.module').then(m => m.StandingsPageModule)
                  }
              ]
          },
          {
              path: '',
              redirectTo: '/team-home/team-detail',
              pathMatch: 'full'
          }
      ]
  },
  {
      path: '',
      redirectTo: '/team-home/team-detail',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamHomePageRoutingModule {}
