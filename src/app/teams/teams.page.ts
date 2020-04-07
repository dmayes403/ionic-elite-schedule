import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Team } from '../team';
import { SelectedTeamService } from '../selected-team.service';
import { EliteApiService } from '../shared/elite-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  teams: Team[] = [
    { id: 1, name: 'HC Elite' },
    { id: 2, name: 'Team Takeover' },
    { id: 3, name: 'DC Thunder' }
  ];

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private eliteApi: EliteApiService,
    private selectedTeam: SelectedTeamService,
  ) { }

  ngOnInit() {
    const selectedTourney = this.route.snapshot.paramMap.get('id');
    this.eliteApi.getTournamentData(selectedTourney).subscribe(data => this.teams = data.teams);
}

  itemTapped(team: Team) {
    this.selectedTeam.team = team;
    this.navCtrl.navigateForward('team-home');
  }

}
