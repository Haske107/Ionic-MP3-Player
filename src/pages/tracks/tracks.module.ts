import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TracksPage } from './tracks';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    TracksPage,
  ],
  imports: [
      ComponentsModule,
    IonicPageModule.forChild(TracksPage),
  ],
})
export class TracksPageModule {}
