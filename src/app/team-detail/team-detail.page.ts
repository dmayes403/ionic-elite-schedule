import { Component, OnInit } from '@angular/core';
import { SelectedTeamService } from '../selected-team.service';
import { Team } from '../team';
import { EliteApiService } from '../shared/elite-api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage implements OnInit {

  tourneyData: any;
  games: any[];

  get team(): Team {
    return this.selectedTeam.team;
  }

  constructor(
    private selectedTeam: SelectedTeamService,
    public eliteApi: EliteApiService
  ) {
  }

  ngOnInit() {
    this.tourneyData = this.eliteApi.getCurrentTourney();

    this.games = _.chain(this.tourneyData.games)
        .filter(g => g.teamId === this.team.id || g.team2Id === this.team.id)
        .map(g => {
            const isTeam1 = (g.teamId === this.team.id);
            const opponentName = isTeam1 ? g.team2 : g.team1;
            const scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
            return {
                gameId: g.id,
                opponent: opponentName,
                time: Date.parse(g.time),
                location: g.location,
                locationUrl: g.locationUrl,
                scoreDisplay,
                homeAway: (isTeam1 ? 'vs.' : 'at')
            };
        })
        .value();
  }

  getScoreDisplay(isTeam1, team1Score, team2Score) {
    if (team1Score && team2Score) {
        const teamScore = (isTeam1 ? team1Score : team2Score);
        const opponentScore = (isTeam1 ? team2Score : team1Score);
        const winIndicator = teamScore > opponentScore ? 'W: ' : 'L: ';
        return winIndicator + teamScore + '-' + opponentScore;
    } else {
        return '';
    }
  }

}
