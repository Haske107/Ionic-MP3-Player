import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtistsPage } from './artists';
import {AboutPage} from "../about/about";
import {TabsPage} from "../tabs/tabs";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ArtistsPage,
      AboutPage,
      TabsPage
  ],
  imports: [
      ComponentsModule,
    IonicPageModule.forChild(ArtistsPage),
  ],
})
export class ArtistsPageModule {}
