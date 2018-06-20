import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  @Input('progress') progress;
  @Output() skipTo = new EventEmitter();

  constructor() {

  }

  onSkipTo($event) {
    // console.log("Progress Skip To:", $event);
    let layerX = $event.layerX;
    let elementWidth = 335;
    let skipToPercent = +(layerX/elementWidth).toFixed(2);
    // console.log("Percent To Skip To", skipToPercent);
    this.skipTo.emit(
      { skip_to: skipToPercent }
    );
  }

}
