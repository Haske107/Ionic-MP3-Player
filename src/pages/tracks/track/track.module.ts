import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackPage } from './track';
import {ManageTrack} from "./manage-track/manage-track";
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    TrackPage,
    ManageTrack
  ],
  imports: [
      IonicPageModule.forChild(TrackPage),
      IonicPageModule.forChild(ManageTrack),
      ComponentsModule
  ],
})
export class TrackPageModule {}
