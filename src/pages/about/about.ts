import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AccordionComponent} from "../../components/accordion/accordion";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

}
