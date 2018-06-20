import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  template: `
    <ion-list style="margin-bottom: 0;">
      <button ion-item (click)="close()">Add to playlist</button>
    </ion-list>
  `
})
export class ManageTrack {
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}