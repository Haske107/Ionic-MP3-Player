import { Component } from '@angular/core';

import { TracksPage } from '../tracks/tracks';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tracksRoot = TracksPage;

  constructor() {

  }
}
