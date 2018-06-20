import {Injectable} from '@angular/core';
import {Network} from '@ionic-native/network';

// import {Observable} from 'rxjs';

import {ToastService} from './toast';


@Injectable()
export class NetworkService {

  public connected: boolean = true;

  constructor( public network: Network, public toastService: ToastService ) {

  }

  onWatchNetworkConnection() {
      this.network.onDisconnect().subscribe(() => {
        console.log('Network disconnected.');
        this.toastService.showBasicToast('Disconnected from network.');
        this.connected = false;
      });
      this.network.onConnect().subscribe(() => {
        console.log('Network connected.');
        this.toastService.showBasicToast('Connected to network.');
        this.connected = true;
      });
  }

  // isOnline(): Observable<any> {
  //   return this.network.onchange();
  // }

}
