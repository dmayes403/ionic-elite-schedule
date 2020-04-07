import { Component, OnInit } from '@angular/core';
import { SelectedTeamService } from '../selected-team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-home',
  templateUrl: './team-home.page.html',
  styleUrls: ['./team-home.page.scss'],
})
export class TeamHomePage implements OnInit {

  constructor(
    private selectedTeam: SelectedTeamService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.activateRoute.snapshot.firstChild.paramMap.get('id'));
  }

  get name(): string {
    return this.selectedTeam.team.name;
  }

}
