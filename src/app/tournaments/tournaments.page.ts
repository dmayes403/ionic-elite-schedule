import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Tournament } from '../tournament';
import { EliteApiService } from '../shared/elite-api.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.page.html',
  styleUrls: ['./tournaments.page.scss'],
})
export class TournamentsPage implements OnInit {

  private tournaments: Tournament[];

  constructor(
    private navCtrl: NavController,
    private eliteApi: EliteApiService,
    private loader: LoadingController
  ) { }

  async ngOnInit() {
    this.eliteApi.getTournaments().subscribe(data => {
        this.tournaments = data;
        this.loader.dismiss();
    });
}


  itemTapped(tournament: Tournament) {
    this.navCtrl.navigateForward(['teams', {id: tournament.id}]);
  }

}
