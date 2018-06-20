import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NetworkService } from '../../services/network';
import { AudioPlayerService } from '../../services/audio-player';

import { TrackPage } from './track/track';

@Component({
  selector: 'page-tracks',
  templateUrl: 'tracks.html',
})
export class TracksPage {

  private artist: any;
  private tracks: any[];
  private prevTrack: any;
  private nextTrack: any;

  constructor( public networkService: NetworkService, public navCtrl: NavController,
    public navParams: NavParams, public audioPlayerService: AudioPlayerService ) {

    // console.log( this.networkService.connected );

    this.artist = this.navParams.get('artist');
    console.log( this.artist );

  }

  onPlayTrack(this_track: any) {
    this.prevTrack = ( this_track.id === 0 ) ? this.getTrackById(this.artist.tracks.length - 1) : this.getTrackById(this_track.id - 1);
    this.nextTrack = ( (this_track.id + 1) === this.artist.tracks.length ) ? this.getTrackById(0) : this.getTrackById(this_track.id + 1);
    this.audioPlayerService.playTrack(this_track).then( (response) => {
      if (response === "repeat") {
        this.onPlayTrack(this_track);
      } else if (response === "play_next") {
        this.onPlayTrack(this.nextTrack);
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

  onGoToTrack(this_track: any, this_play_next: boolean) {
    this.prevTrack = ( this_track.id === 0 ) ? this.getTrackById(this.artist.tracks.length - 1) : this.getTrackById(this_track.id - 1);
    this.nextTrack = ( (this_track.id + 1) === this.artist.tracks.length ) ? this.getTrackById(0) : this.getTrackById(this_track.id + 1);
    this.navCtrl.push( TrackPage, {
      artist: this.artist, track: this_track,
      // pins: this.artist.pins,
      prevTrack: this.prevTrack, nextTrack: this.nextTrack,
      play_next: this_play_next,
    } );
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

}





