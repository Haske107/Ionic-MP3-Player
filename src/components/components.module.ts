import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { AccordionComponent} from "./accordion/accordion";
import {IonicPageModule} from "ionic-angular";
@NgModule({
	declarations: [
		ProgressBarComponent,
        AccordionComponent
	],
	imports: [
        IonicPageModule.forChild(AccordionComponent),
        IonicPageModule.forChild(ProgressBarComponent),
    ],
	exports: [
        ProgressBarComponent,
        AccordionComponent
    ]
})
export class ComponentsModule {}
