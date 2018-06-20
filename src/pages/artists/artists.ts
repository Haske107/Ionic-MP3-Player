import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { DataService } from '../../services/data';

import { TracksPage } from '../tracks/tracks';

@Component({
  selector: 'page-artists',
  templateUrl: 'artists.html',
})
export class ArtistsPage {

  private artists: any[] = [];
  private allArtists: any[] = [];
  private loading: any;

  private showSearch: boolean = false;
  private searchQuery: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataService: DataService, public loadingCtrl: LoadingController,
     ) {
  }

  ionViewDidLoad() {
    this.getArtists();
  }

  getArtists() {

    this.onLoading('Loading Artists...');
    this.dataService.fetchArtists().subscribe( (this_data) => {
      // if ( this_data !== null) {
        this.artists = this_data;
        this.allArtists = this_data;
        console.log( this.artists );
      // }
      this.loading.dismiss();
    });

  }

  onLoading(message: string) {
    this.loading = this.loadingCtrl.create({
      content: message
    });
    this.loading.present();
  }

  // onSortUsers( asc: boolean ) {
  //   this.users.sort( (a, b) => {
  //     if ( a.username === undefined ) {
  //       a.username = "New User";
  //     }
  //     if ( b.username === undefined ) {
  //       b.username = "New User";
  //     }
  //     return ( a.username.toLowerCase() > b.username.toLowerCase() ) ? 1: -1;
  //   });
  //   this.filterableCopyOfUsers = this.users;
  //   // console.log( this.users );
  //   console.log('loaded users');
  // }

  onFilterUsers() {
    this.artists = this.allArtists.filter( (artist) => {
      return ( artist.name.toLowerCase().indexOf( this.searchQuery.toLowerCase() ) > -1 ) ? true : false;
    });
  }

  onCancelSearch() {
    if ( this.searchQuery !== "" ) {
      this.searchQuery = "";
      this.onFilterUsers();
    }
    this.showSearch = false; 
  }

  onGoToTracks(this_artist: any) {
    this.navCtrl.push( TracksPage, { artist: this_artist } );
  }

}
