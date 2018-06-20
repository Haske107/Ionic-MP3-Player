export class AudioPlayerService {

  private selectedTrack: any;
  private audioPlayer: any[] = [];
  private audio: HTMLAudioElement;
  private progressInterval: any;
  private repeatTrack: boolean = false;

  toggleRepeat() {
    this.repeatTrack = !this.repeatTrack;
  }

  playTrack(track: any): Promise<any> {
    this.stopAllTracks();
    this.selectedTrack = track;

    this.audio = new Audio(this.selectedTrack.src);
    this.audioPlayer.push(this.audio);
    this.audioPlayer[0].play();
    this.selectedTrack.playing = true;

    return new Promise( (resolve, reject) => {

      this.calculateTrackProgress().then( (track_finished) => {
        if (this.repeatTrack) {
          resolve("repeat");
        } else {
          resolve("play_next");
        }
      }).catch( (err) => {
        console.error(err);
        reject(err);
      });

    });

  }

  resumeTrack() {
    this.audioPlayer[0].play();
    this.selectedTrack.playing = true;

    this.calculateTrackProgress();
  }

  calculateTrackProgress(): Promise<any> {

    return new Promise( (resolve, reject) => {
      this.progressInterval = setInterval(() => {

          if ( this.audioPlayer[0].currentTime < this.audioPlayer[0].duration ) {
            this.selectedTrack.progress = (this.audioPlayer[0].currentTime / this.audioPlayer[0].duration) * 100;
          } else if ( this.audioPlayer[0].currentTime >= this.audioPlayer[0].duration ) {
            // alert('true')
            this.selectedTrack.playing = false;
            this.selectedTrack.progress = 0;
            clearInterval(this.progressInterval);
            resolve(true);
          }
          // console.log( this.selectedTrack.progress );

      }, 250 ); // .25 secs
    });

  }

  pauseTrack() {
    this.audioPlayer[0].pause();
    this.selectedTrack.playing = false;

    clearInterval(this.progressInterval);
  }

  rewind() {
    // this.audio.playbackRate = -2.0;    
  }

  fastFwd() {
    this.audio.playbackRate = 2.0; 
  }

  skipTo(percent_to_skip_to) {
    let new_current_time =  percent_to_skip_to * this.audioPlayer[0].duration;
    this.audioPlayer[0].currentTime = new_current_time;
    this.selectedTrack.progress = (this.audioPlayer[0].currentTime / this.audioPlayer[0].duration) * 100;
  }

  stopAllTracks() {
    if ( this.selectedTrack !== undefined ) {
      this.selectedTrack.playing = false;
    }
    if ( this.audioPlayer[0] !== undefined ) {
      this.audioPlayer[0].pause();
      clearInterval(this.progressInterval);
    }
    this.audioPlayer = [];
  }

}
