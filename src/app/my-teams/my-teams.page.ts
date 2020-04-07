import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { EliteApiService } from '../shared/elite-api.service';

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.page.html',
  styleUrls: ['./my-teams.page.scss'],
})
export class MyTeamsPage implements OnInit {

  constructor(
    private loader: LoadingController,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  // goToTournaments() {
  //   this.navCtrl.navigateForward('tournaments');
  // }

  async goToTournaments() {
    const loading = await this.loader.create({
        message: 'Getting tournaments...'
    });
    loading.present().then(_ => {
        this.navCtrl.navigateForward('tournaments');
    });
}

}
