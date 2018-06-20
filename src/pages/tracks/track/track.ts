import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { NetworkService } from '../../../services/network';
import { AudioPlayerService } from '../../../services/audio-player';

import { ManageTrack } from './manage-track/manage-track';


@Component({
  selector: 'page-track',
  templateUrl: 'track.html',
})
export class TrackPage {

  private artist: any;
  // private repeat: boolean = false;
  private shuffle: boolean = false;
  private track: any;
  private prevTrack: any;
  private nextTrack: any;
  private pins: any[];
  private locatedPin: any;

  constructor( public networkService: NetworkService, public navCtrl: NavController,
    public navParams: NavParams, public audioPlayerService: AudioPlayerService,
    public popoverCtrl: PopoverController, public modalCtrl: ModalController ) {
    this.artist = this.navParams.get('artist');
    this.track = this.navParams.get('track');
    // this.pins = this.navParams.get('pins');
    this.prevTrack = this.navParams.get('prevTrack');
    this.nextTrack = this.navParams.get('nextTrack');

    // this.locatePin( this.track.id );
    if ( this.navParams.get('play_track') ) {
      this.onPlayTrack(this.track);
    }
  }

  ionViewDidLoad() {
  }

  // locatePin( track_id: number ) {
  //   this.pins.forEach( (pin) => {
  //     if (pin.id === track_id) {
  //       this.locatedPin = pin;
  //     }
  //   });
  // }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(ManageTrack);
    popover.present({
      ev: myEvent
    });
  }

  precisionRound(number, precision) {
    let factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  convertToHHMMSS(these_seconds) {
      let sec_num = parseInt(these_seconds, 10); // don't forget the second param
      let hours   = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      let seconds = sec_num - (hours * 3600) - (minutes * 60);
      let seconds_str:string = "";
      let minutes_str:string = "";
      let hours_str:string = "";

      seconds_str = (seconds < 10) ? "0"+seconds : seconds.toString(); 
      minutes_str = (minutes < 10) ? "0"+minutes : minutes.toString(); 
      hours_str = (hours < 10) ? "0"+hours : hours.toString(); 
      if (hours === 0) {
        return minutes_str+':'+seconds_str;
      } else {
        return hours_str+':'+minutes_str+':'+seconds_str;
      }
  }

  onSkipTo(event) {
    // console.log( event );
    console.log( event.skip_to );
    this.audioPlayerService.skipTo(event.skip_to);
  }

  // onToggleRepeat() {
  //   this.repeat = !this.repeat;
  // }

  onToggleShuffle() {
    this.shuffle = !this.shuffle;
  }

  onPlayTrack(this_track: any) {
    this.audioPlayerService.playTrack(this_track).then( (response) => {
      if (response === "repeat") {
        this.onPlayTrack(this_track);
      } else if (response === "play_next") {
        this.onGoToTrack(this.nextTrack, true);
      }
    }).catch( (err) => {
      console.error(err);
    });
  }

  onResumeTrack() {
    this.audioPlayerService.resumeTrack();
  }

  onPauseTrack() {
    this.audioPlayerService.pauseTrack();
  }

  onGoToTrack(this_track: any, this_play_track: boolean) {
    this.prevTrack = ( this_track.id === 0 ) ? this.getTrackById(this.artist.tracks.length - 1) : this.getTrackById(this_track.id - 1);
    this.nextTrack = ( (this_track.id + 1) === this.artist.tracks.length ) ? this.getTrackById(0) : this.getTrackById(this_track.id + 1);
    this.navCtrl.push( TrackPage, {
      artist: this.artist,
      track: this_track,
      // pins: this.artist.pins,
      prevTrack: this.prevTrack,
      nextTrack: this.nextTrack,
      play_track: this_play_track,
    } );
  }

  onRewind() {
    this.audioPlayerService.rewind();
  }

  onFastFwd() {
    this.audioPlayerService.fastFwd();    
  }

  getTrackById(track_id: number) {
    let this_track: any;
    this.artist.tracks.forEach( (track) => {
      if (track.id === track_id) {
        this_track = track;
        // console.log(track);
        // alert("found");
      }
    });
    return this_track;
  }

  onShowInfo() {

    // let modalDetails = {
    //   track: this.track,
    // };

    // const modal = this.modalCtrl.create(ModalTrackComponent, modalDetails, {cssClass: 'modal-track'});
    // modal.present();
    // modal.onDidDismiss((response) => {
    //   if (response != null) {
    //     console.log("Response", response);
    //   }
    // }); 
    alert('test');   
  }

  onGoBack() {
    this.navCtrl.pop();
  }

}
