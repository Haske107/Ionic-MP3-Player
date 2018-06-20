import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TracksPage } from './tracks';
import {ComponentsModule} from "../../components/components.module";
import {TrackPageModule} from "./track/track.module";

@NgModule({
  declarations: [
    TracksPage,
  ],
  imports: [
      ComponentsModule,
      TrackPageModule,
      IonicPageModule.forChild(TracksPage),
  ],
})
export class TracksPageModule {}
