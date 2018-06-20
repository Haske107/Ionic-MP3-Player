import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

// import { AuthService } from './auth';

@Injectable()
export class DataService {

  constructor(
    private http: Http,
    ) {
  }

  fetchExhibits() {

    let endpoint: string = 'https://audio-guide-b67da.firebaseio.com/exhibits.json';
    // let endpoint: string = 'https://jsonplaceholder.typicode.com/users/' + exhibitId;

    // .do() runs on the result of an observable
    return this.http.get( endpoint )
      .map( (response: Response) => {
        // console.log( response.json() );
        return response.json();
      });
  }

  fetchBuildings() {

    let endpoint: string = 'https://audio-guide-b67da.firebaseio.com/exhibits/0/buildings.json';

    return this.http.get( endpoint )
      .map( (response: Response) => {
        return response.json();
      });
      // .catch( (error) => {
      //   console.error(error);
      //   return error;
      // });
  }

  fetchArtists() {

    let endpoint: string = 'https://ionic-audio-player.firebaseio.com/artists.json';

    return this.http.get( endpoint )
      .map( (response: Response) => {
        return response.json();
      });
  }

  // fetchTracks() {

  //   let endpoint: string = 'https://ionic-audio-player.firebaseio.com/artists.json';

  //   return this.http.get( endpoint )
  //     .map( (response: Response) => {
  //       return response.json();
  //     });
  // }


}
