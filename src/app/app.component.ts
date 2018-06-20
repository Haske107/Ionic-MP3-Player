import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';

import { ArtistsPage } from '../pages/artists/artists';
// import { TracksPage } from '../pages/tracks/tracks';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';

import { NetworkService } from '../services/network';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {

  @ViewChild('nav') nav: NavController;

  activePage: any;

  rootPage: any = ArtistsPage;
  aboutPage: any = AboutPage;
  settingsPage: any = SettingsPage;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    public networkService: NetworkService,
    ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#488aff');
      this.splashScreen.hide();
      this.networkService.onWatchNetworkConnection();
    });

  }

  onGoTo(page: any) {
    this.activePage = page;
    this.nav.setRoot(page);
    // this.nav.setRoot(this.rootPage);
    // this.nav.setPages( [ page ] );
    this.menuCtrl.close();
  }

}
