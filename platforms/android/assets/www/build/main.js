webpackJsonp([2],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rooms_rooms__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuildingsPage = (function () {
    function BuildingsPage(navCtrl, navParams, dataService, loadingCtrl) {
        // this.exhibit = this.navParams.get('exhibit');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.loadingCtrl = loadingCtrl;
        // private exhibit: any;
        this.buildings = [];
    }
    BuildingsPage.prototype.ionViewDidLoad = function () {
        this.getBuildings();
    };
    BuildingsPage.prototype.getBuildings = function () {
        var _this = this;
        this.onLoading('Loading buildings...');
        this.dataService.fetchBuildings().subscribe(function (this_data) {
            // if ( this_data !== null) {
            _this.buildings = this_data;
            console.log(_this.buildings);
            // }
            _this.loading.dismiss();
        });
    };
    BuildingsPage.prototype.onLoading = function (message) {
        this.loading = this.loadingCtrl.create({
            content: message
        });
        this.loading.present();
    };
    BuildingsPage.prototype.onGoToRooms = function (this_building) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__rooms_rooms__["a" /* RoomsPage */], { building: this_building });
    };
    BuildingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buildings',template:/*ion-inline-start:"/Users/justinestrada/Sites/audio-guide/src/pages/buildings/buildings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only\n        menuToggle >\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Audio Tour</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content no-padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col no-padding>\n        <img src="https://firebasestorage.googleapis.com/v0/b/audio-guide-b67da.appspot.com/o/Uffizi_Gallery_Florence_1.jpg?alt=media&token=658a541f-9896-4109-b919-c063f4c01723" style="width: 100%;" alt="Uffizi Gallery" />\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col>\n        <h3>Start the Tour, Choose a Building</h3>\n        <ion-list>\n          <ion-item-divider>Buildings</ion-item-divider>\n          <button ion-item *ngFor="let building of buildings"\n            (click)="onGoToRooms(building)">\n            <ion-icon name="ios-home" item-start></ion-icon>\n            <h3>{{ building.name }}</h3>\n          </button>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-col>\n        <a ion-button block href="http://www.uffizi.com/online-ticket-booking-uffizi-gallery.asp" target="_blank" title="Buy Tickets Uffizi Gallery">Buy Tickets</a>\n      </ion-col>\n    </ion-row> -->\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/justinestrada/Sites/audio-guide/src/pages/buildings/buildings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_data__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], BuildingsPage);
    return BuildingsPage;
}());

//# sourceMappingURL=buildings.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AuthService } from './auth';
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.fetchExhibits = function () {
        var endpoint = 'https://audio-guide-b67da.firebaseio.com/exhibits.json';
        // let endpoint: string = 'https://jsonplaceholder.typicode.com/users/' + exhibitId;
        // .do() runs on the result of an observable
        return this.http.get(endpoint)
            .map(function (response) {
            // console.log( response.json() );
            return response.json();
        });
    };
    DataService.prototype.fetchBuildings = function () {
        var endpoint = 'https://audio-guide-b67da.firebaseio.com/exhibits/0/buildings.json';
        return this.http.get(endpoint)
            .map(function (response) {
            return response.json();
        });
        // .catch( (error) => {
        //   console.error(error);
        //   return error;
        // });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tracks_tracks__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__locations_locations__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomsPage = (function () {
    function RoomsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.building = this.navParams.get('building');
        console.log(this.building);
    }
    RoomsPage.prototype.onGoToTracks = function (this_room) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tracks_tracks__["a" /* TracksPage */], { room: this_room });
    };
    RoomsPage.prototype.onGoToLocations = function (this_room) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__locations_locations__["a" /* LocationsPage */], { room: this_room });
    };
    RoomsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rooms',template:/*ion-inline-start:"/Users/justinestrada/Sites/audio-guide/src/pages/rooms/rooms.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ building.name }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content no-padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col no-padding>\n        <img src="https://firebasestorage.googleapis.com/v0/b/audio-guide-b67da.appspot.com/o/Uffizi_Gallery_Florence_2.jpg?alt=media&token=2670cdde-7b55-48c2-b0f6-e94e54c605f3" style="width: 100%;" alt="Uffizi Gallery" />\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col>\n        <ion-list>\n          <ion-item-divider>Rooms</ion-item-divider>\n          <button ion-item *ngFor="let room of building.rooms"\n            (click)="onGoToTracks(room)">\n            <ion-icon name="ios-home" item-start></ion-icon>\n            <h3>{{ room.name }}</h3>\n          </button>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/justinestrada/Sites/audio-guide/src/pages/rooms/rooms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RoomsPage);
    return RoomsPage;
}());

//# sourceMappingURL=rooms.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TracksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_network__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_audio_player__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__track_track__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TracksPage = (function () {
    function TracksPage(networkService, navCtrl, navParams, audioPlayerService) {
        // console.log( this.networkService.connected );
        this.networkService = networkService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.audioPlayerService = audioPlayerService;
        this.room = this.navParams.get('room');
        console.log(this.room);
        // this.room.tracks = [{
        //   id: 0,
        //   img: 'https://firebasestorage.googleapis.com/v0/b/audio-guide-b67da.appspot.com/o/Don_Lorenzo_Monaco_Adoration_of_the_Magi.jpg?alt=media&token=a328829b-c9da-47bf-8bca-00cfb6acd45c',
        //   src: 'https://firebasestorage.googleapis.com/v0/b/audio-guide-b67da.appspot.com/o/Botticelli_Birth_of_Venus.mp3?alt=media&token=6739ba78-0663-4a65-840b-c8915515e259',
        //   title: 'Adoration of the Magi',
        //   artist: 'Lorenzo Monaco',
        //   description: 'The painting is known by a rather complete documentation. It was executed by Lorenzo with the help of three assistants, and, despite the reduced size, it was paid the huge sum of 182 florins. According to some hints in Giorgio Vasari\'s Lives of the Most Excellent Painters, it could have been executed for the church of Sant\'Egidio in Florence, when it was reconsecrated by Pope Martin V. Detail of the hound. Later it is documented in a room facing the cloister of the monastery of San Marco, where it was seen by Fra Angelico. A source from 1810 reports how the work was initially attributed to Fra Angelico himself. It was restored in 1995.',
        //   playing: false,
        //   progress: 0,
        // },
        // {
        //   id: 1,
        //   img: 'https://firebasestorage.googleapis.com/v0/b/audio-guide-b67da.appspot.com/o/Sandro_Botticelli_Birth_of_Venus.jpg?alt=media&token=83a070a6-5261-432b-9793-dbd23b05cf37',
        //   src: 'https://firebasestorage.googleapis.com/v0/b/audio-guide-b67da.appspot.com/o/Botticelli_Birth_of_Venus.mp3?alt=media&token=6739ba78-0663-4a65-840b-c8915515e259',
        //   title: 'Birth of Venus',
        //   artist: 'Sandro Botticelli',
        //   description: 'The Birth of Venus (Italian: Nascita di Venere [ˈnaʃʃita di ˈvɛːnere]) is a painting by Sandro Botticelli probably made in the mid 1480s. It depicts the goddess Venus arriving at the shore after her birth, when she had emerged from the sea fully-grown (called Venus Anadyomene and often depicted in art). The painting is in the Uffizi Gallery in Florence, Italy.',
        //   playing: false,
        //   progress: 0,
        // },
        // {
        //   id: 2,
        //   img: 'https://firebasestorage.googleapis.com/v0/b/audio-guide-b67da.appspot.com/o/Verrocchio_and_Leonardo_da_Vinci_Baptism_of_Christ.jpg?alt=media&token=f641cddf-1abe-4315-a8e0-1e5d6f393a8c',
        //   src: 'https://firebasestorage.googleapis.com/v0/b/audio-guide-b67da.appspot.com/o/Verrocchio_and_Leonardo_Baptism_of_Christ.mp3?alt=media&token=47743b1a-bc6b-45dc-b1ef-1a9e52f3ba74',
        //   title: 'Baptism of Christ',
        //   artist: 'Verrocchio and Leonardo da Vinci',
        //   description: 'The Baptism of Christ is a painting finished around 1475 in the studio of the Italian Renaissance painter Andrea del Verrocchio and generally ascribed to him and his pupil Leonardo da Vinci. Some art historians discern the hands of other members of Verrocchio\'s workshop in the painting as well. The picture depicts the Baptism of Jesus by John the Baptist as recorded in the Biblical Gospels of Matthew, Mark and Luke. The angel to the left is recorded as having been painted by the youthful Leonardo, a fact which has excited so much special comment and mythology, that the importance and value of the picture as a whole and within the œuvre of Verrocchio is often overlooked. Modern critics also attribute much of the landscape in the background and the figure of Christ to Leonardo da Vinci as well.[1] The painting is housed in the Uffizi Gallery in Florence.',
        //   playing: false,
        //   progress: 0,
        // },
        // {
        //   id: 3,
        //   img: 'https://firebasestorage.googleapis.com/v0/b/audio-guide-b67da.appspot.com/o/Titian_Venus_of_Urbino.jpg?alt=media&token=4d9d022e-c2f4-412f-a191-94cf2a973b2d',
        //   src: 'https://firebasestorage.googleapis.com/v0/b/audio-guide-b67da.appspot.com/o/Verrocchio_and_Leonardo_Baptism_of_Christ.mp3?alt=media&token=47743b1a-bc6b-45dc-b1ef-1a9e52f3ba74',
        //   title: 'Venus of Urbino',
        //   artist: 'Titian',
        //   description: 'The Venus of Urbino is an oil painting by the Italian painter Titian, which seems to have been begun in 1532 or 1534, and was perhaps completed in 1534, but not sold until 1538. It depicts a nude young woman, traditionally identified with the goddess Venus, reclining on a couch or bed in the sumptuous surroundings of a Renaissance palace. It is now in the Galleria degli Uffizi in Florence.',
        //   playing: false,
        //   progress: 0,
        // },
        // {
        //   id: 4,
        //   img: 'https://firebasestorage.googleapis.com/v0/b/audio-guide-b67da.appspot.com/o/Michelangelo_Doni_Tondo.jpg?alt=media&token=9eec8e30-3e8d-4712-8c65-e5241e52dff8',
        //   src: 'https://firebasestorage.googleapis.com/v0/b/audio-guide-b67da.appspot.com/o/Verrocchio_and_Leonardo_Baptism_of_Christ.mp3?alt=media&token=47743b1a-bc6b-45dc-b1ef-1a9e52f3ba74',
        //   title: 'Doni Tondo',
        //   artist: 'Michelangelo',
        //   description: 'The Doni Tondo or Doni Madonna, is the only finished panel painting by the mature Michelangelo to survive. Now in the Uffizi in Florence, Italy, and still in its original frame, the Doni Tondo was probably commissioned by Agnolo Doni to commemorate his marriage to Maddalena Strozzi, the daughter of a powerful Tuscan family. The painting is in the form of a tondo, meaning in Italian, \'round\', a shape which is frequently associated during the Renaissance with domestic ideas.',
        //   playing: false,
        //   progress: 0,
        // }];
        // this.room.pins = [{
        //   id: 0,
        //   x_coord: 70,
        //   y_coord: 96,
        // },
        // {
        //   id: 1,
        //   x_coord: 80,
        //   y_coord: 48,
        // },
        // {
        //   id: 2,
        //   x_coord: 152,
        //   y_coord: 80,
        // },
        // {
        //   id: 3,
        //   x_coord: 136,
        //   y_coord: 224,
        // },
        // {
        //   id: 4,
        //   x_coord: 204,
        //   y_coord: 188,
        // }];
        // console.log( this.room );
    }
    TracksPage.prototype.onPlayTrack = function (track) {
        this.prevTrack = (track.id === 0) ? this.getTrackById(this.room.tracks.length - 1) : this.getTrackById(track.id - 1);
        this.nextTrack = ((track.id + 1) === this.room.tracks.length) ? this.getTrackById(0) : this.getTrackById(track.id + 1);
        this.audioPlayerService.playTrack(track);
    };
    TracksPage.prototype.onResumeTrack = function () {
        this.audioPlayerService.resumeTrack();
    };
    TracksPage.prototype.onPauseTrack = function () {
        this.audioPlayerService.pauseTrack();
    };
    TracksPage.prototype.onGoToTrack = function (this_track) {
        this.prevTrack = (this_track.id === 0) ? this.getTrackById(this.room.tracks.length - 1) : this.getTrackById(this_track.id - 1);
        this.nextTrack = ((this_track.id + 1) === this.room.tracks.length) ? this.getTrackById(0) : this.getTrackById(this_track.id + 1);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__track_track__["a" /* TrackPage */], { room: this.room, track: this_track, pins: this.room.pins, prevTrack: this.prevTrack, nextTrack: this.nextTrack, });
    };
    TracksPage.prototype.getTrackById = function (track_id) {
        var this_track;
        this.room.tracks.forEach(function (track) {
            if (track.id === track_id) {
                this_track = track;
                // console.log(track);
                // alert("found");
            }
        });
        return this_track;
    };
    TracksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tracks',template:/*ion-inline-start:"/Users/justinestrada/Sites/audio-guide/src/pages/tracks/tracks.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ room.name }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content no-padding [class.trackSelected]="audioPlayerService.selectedTrack" >\n  <ion-grid>\n\n    <ion-row style="margin-left: -8px; margin-right: -8px; margin-top: -8px;">\n      <ion-col>\n        <img src="https://firebasestorage.googleapis.com/v0/b/audio-guide-b67da.appspot.com/o/Uffizi_Gallery_Florence_2.jpg?alt=media&token=2670cdde-7b55-48c2-b0f6-e94e54c605f3" style="width: 100%;" alt="Uffizi Gallery" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="!networkService.connected" padding>\n      <ion-col>\n        <h3>Error</h3>\n        <p>Threre was an error processing that request. Please pull down to refresh, or check your network connection settings.</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="networkService.connected" padding>\n      <ion-col col-12>\n          <ion-list>\n          <ion-item-divider>Tracks</ion-item-divider>\n            <ion-item *ngFor="let track of room.tracks">\n              <button ion-button item-start (click)="onPlayTrack(track)" clear >\n                <ion-icon *ngIf="!track.playing" name="ios-play" color="primary" ></ion-icon>\n                <ion-spinner *ngIf="track.playing" name="bubbles" color="primary" ></ion-spinner>\n              </button>\n              <h3 (click)="onGoToTrack(track)" text-wrap>{{ track.title }}</h3>\n              <p (click)="onGoToTrack(track)" >{{ track.artist }}</p>\n              <ion-icon item-end name="ios-information-circle" (click)="onGoToTrack(track)" color="primary" ></ion-icon>\n            </ion-item>\n          </ion-list>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n<ng-container *ngIf="networkService.connected" >\n  <ion-footer *ngIf="audioPlayerService.selectedTrack" color="light" style="background: #f8f8f8;" no-padding>\n    <ion-grid>\n      <ion-row padding>\n        <ion-col col-4 text-center>\n          <button ion-button clear (click)="onPlayTrack(prevTrack)" ><ion-icon name="ios-skip-backward" color="primary"></ion-icon></button>\n        </ion-col>\n        <ion-col col-4 text-center>\n          <button ion-button clear *ngIf="!audioPlayerService.selectedTrack.playing" (click)="onResumeTrack()" >\n            <ion-icon name="ios-play" color="primary"></ion-icon>\n          </button>\n          <button ion-button clear *ngIf="audioPlayerService.selectedTrack.playing" (click)="onPauseTrack()" >\n            <ion-icon name="ios-pause" color="primary"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col col-4 text-center>\n          <button ion-button clear (click)="onPlayTrack(nextTrack)" ><ion-icon name="ios-skip-forward" color="primary"></ion-icon></button>\n        </ion-col>\n        <ion-col col-12>\n            <progress-bar [progress]="audioPlayerService.selectedTrack.progress"></progress-bar>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-footer>\n</ng-container>\n'/*ion-inline-end:"/Users/justinestrada/Sites/audio-guide/src/pages/tracks/tracks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_network__["a" /* NetworkService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_audio_player__["a" /* AudioPlayerService */]])
    ], TracksPage);
    return TracksPage;
}());

//# sourceMappingURL=tracks.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioPlayerService; });
var AudioPlayerService = (function () {
    function AudioPlayerService() {
        this.audioPlayer = [];
    }
    AudioPlayerService.prototype.playTrack = function (track) {
        this.stopAllTracks();
        this.selectedTrack = track;
        this.audio = new Audio(this.selectedTrack.src);
        this.audioPlayer.push(this.audio);
        this.audioPlayer[0].play();
        this.selectedTrack.playing = true;
        this.calculateTrackProgress();
    };
    AudioPlayerService.prototype.resumeTrack = function () {
        this.audioPlayer[0].play();
        this.selectedTrack.playing = true;
        this.calculateTrackProgress();
    };
    AudioPlayerService.prototype.calculateTrackProgress = function () {
        var _this = this;
        this.progressInterval = setInterval(function () {
            if (_this.audioPlayer[0].currentTime < _this.audioPlayer[0].duration) {
                _this.selectedTrack.progress = (_this.audioPlayer[0].currentTime / _this.audioPlayer[0].duration) * 100;
            }
            else if (_this.audioPlayer[0].currentTime >= _this.audioPlayer[0].duration) {
                // alert('true')
                _this.selectedTrack.playing = false;
                _this.selectedTrack.progress = 0;
                clearInterval(_this.progressInterval);
            }
            // console.log( this.selectedTrack.progress );
        }, 500); // .5 secs
    };
    AudioPlayerService.prototype.pauseTrack = function () {
        this.audioPlayer[0].pause();
        this.selectedTrack.playing = false;
        clearInterval(this.progressInterval);
    };
    // playPreviousTrack(track: any) {
    //   this.stopAllTracks();
    //   this.selectedTrack = track;
    //   this.audio = new Audio(this.selectedTrack.src);
    //   this.audioPlayer.push(this.audio);
    //   this.audioPlayer[0].play();
    //   this.selectedTrack.playing = true;
    //   this.calculateTrackProgress();
    // }
    // playNextTrack(track: any) {
    //   this.stopAllTracks();
    //   this.selectedTrack = track;
    //   this.audio = new Audio(this.selectedTrack.src);
    //   this.audioPlayer.push(this.audio);
    //   this.audioPlayer[0].play();
    //   this.selectedTrack.playing = true;
    //   this.calculateTrackProgress();
    // }
    AudioPlayerService.prototype.stopAllTracks = function () {
        if (this.selectedTrack !== undefined) {
            this.selectedTrack.playing = false;
        }
        if (this.audioPlayer[0] !== undefined) {
            this.audioPlayer[0].pause();
            clearInterval(this.progressInterval);
        }
        this.audioPlayer = [];
    };
    return AudioPlayerService;
}());

//# sourceMappingURL=audio-player.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/justinestrada/Sites/audio-guide/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only\n        menuToggle >\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-label floating>Language</ion-label>\n            <ion-select interface="popover">\n              <ion-option>English</ion-option>\n              <ion-option>Spanish</ion-option>\n              <ion-option>Japanese</ion-option>\n              <ion-option>Chinese</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item></ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <a ion-button block href="http://www.uffizi.com/online-ticket-booking-uffizi-gallery.asp" target="_blank" title="Buy Tickets Uffizi Gallery">Buy Tickets</a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/justinestrada/Sites/audio-guide/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/locations/locations.module": [
		688,
		1
	],
	"../pages/settings/settings.module": [
		689,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExhibitPage = (function () {
    function ExhibitPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExhibitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExhibitPage');
    };
    ExhibitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exhibit',template:/*ion-inline-start:"/Users/justinestrada/Sites/audio-guide/src/pages/exhibit/exhibit.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only\n        menuToggle >\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Uffizi Gallery</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content no-padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col no-padding>\n        <img src="https://firebasestorage.googleapis.com/v0/b/audio-guide-b67da.appspot.com/o/Uffizi_Gallery_Florence_1.jpg?alt=media&token=658a541f-9896-4109-b919-c063f4c01723" style="width: 100%;" alt="Uffizi Gallery" />\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col no-padding>\n        <a ion-button block href="http://www.uffizi.com/online-ticket-booking-uffizi-gallery.asp" target="_blank" title="Buy Tickets Uffizi Gallery">Buy Tickets</a>\n      </ion-col>\n    </ion-row>\n    <ion-row style="padding: 0 16px 16px 16px;">\n      <ion-col col-12 no-padding>\n        <accordion name="About" >\n          <p>The Uffizi Gallery is a prominent art museum located adjacent to the Piazza della Signoria in the Historic Centre of Florence in the region of Tuscany, Italy. One of the most important Italian museums, and the most visited, it is also one of the largest and best known in the world, and holds a collection of priceless works, particularly from the period of the Italian Renaissance.</p>\n          <p>After the ruling house of Medici died out, their art collections were gifted to the city of Florence under the famous Patto di famiglia negotiated by Anna Maria Luisa, the last Medici heiress. The Uffizi is one of the first modern museums. The gallery had been open to visitors by request since the sixteenth century, and in 1765 it was officially opened to the public, formally becoming a museum in 1865.</p>\n          <p style="margin-bottom: 0;">Today, the Uffizi is one of the most popular tourist attractions of Florence. The Uffizi hosted over two million visitors in 2016, making it the most visited art gallery in Italy. Tickets are available on-line in advance, however, to significantly reduce the waiting time. The museum is being renovated to more than double the number of rooms used to display artwork.</p>\n        </accordion>\n      </ion-col>\n      <ion-col col-12 no-padding>\n        <accordion name="Hours" >\n          <ul style="margin-bottom: 0;">\n            <li>Monday Closed</li>\n            <li>Tuesday 8:15AM–6:50PM</li>\n            <li>Wednesday 8:15AM–6:50PM</li>\n            <li>Thursday  8:15AM–6:50PM</li>\n            <li>Friday 8:15AM–6:50PM</li>\n            <li>Saturday  8:15AM–6:50PM</li>\n            <li>Sunday  8:15AM–6:50PM</li>\n          </ul>\n        </accordion>\n      </ion-col>\n      <ion-col col-12 no-padding>\n        <accordion name="Directions" >\n          <p style="margin-bottom: 0;">Piazzale degli Uffizi, 6, 50122 Firenze FI, Italy</p>\n          <a ion-button block href="https://www.google.com/maps/place/Uffizi+Gallery/@43.7677856,11.2531221,17z/" target="_blank" title="View on Google Maps">View on Google Maps</a>\n        </accordion>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/justinestrada/Sites/audio-guide/src/pages/exhibit/exhibit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ExhibitPage);
    return ExhibitPage;
}());

//# sourceMappingURL=exhibit.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.showBasicToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            // console.log('Dismissed toast');
        });
        toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_network__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_audio_player__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrackPage = (function () {
    function TrackPage(networkService, navCtrl, navParams, audioPlayerService) {
        this.networkService = networkService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.audioPlayerService = audioPlayerService;
        this.room = this.navParams.get('room');
        this.track = this.navParams.get('track');
        this.pins = this.navParams.get('pins');
        this.prevTrack = this.navParams.get('prevTrack');
        this.nextTrack = this.navParams.get('nextTrack');
        this.locatePin(this.track.id);
    }
    TrackPage_1 = TrackPage;
    TrackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackPage');
    };
    TrackPage.prototype.locatePin = function (track_id) {
        var _this = this;
        this.pins.forEach(function (pin) {
            if (pin.id === track_id) {
                _this.locatedPin = pin;
            }
        });
    };
    TrackPage.prototype.onPlayTrack = function (track) {
        this.audioPlayerService.playTrack(track);
    };
    TrackPage.prototype.onResumeTrack = function () {
        this.audioPlayerService.resumeTrack();
    };
    TrackPage.prototype.onPauseTrack = function () {
        this.audioPlayerService.pauseTrack();
    };
    TrackPage.prototype.onGoToTrack = function (this_track) {
        this.prevTrack = (this_track.id === 0) ? this.getTrackById(this.room.tracks.length - 1) : this.getTrackById(this_track.id - 1);
        this.nextTrack = ((this_track.id + 1) === this.room.tracks.length) ? this.getTrackById(0) : this.getTrackById(this_track.id + 1);
        this.navCtrl.push(TrackPage_1, { room: this.room, track: this_track, pins: this.room.pins, prevTrack: this.prevTrack, nextTrack: this.nextTrack, });
    };
    TrackPage.prototype.getTrackById = function (track_id) {
        var this_track;
        this.room.tracks.forEach(function (track) {
            if (track.id === track_id) {
                this_track = track;
                // console.log(track);
                // alert("found");
            }
        });
        return this_track;
    };
    TrackPage = TrackPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-track',template:/*ion-inline-start:"/Users/justinestrada/Sites/audio-guide/src/pages/tracks/track/track.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ track.title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content no-padding [class.trackSelected]="audioPlayerService.selectedTrack && audioPlayerService.selectedTrack === track" >\n  <ion-grid>\n\n    <ion-row *ngIf="!networkService.connected" padding>\n      <ion-col>\n        <h3>Error</h3>\n        <p>Threre was an error processing that request. Please pull down to refresh, or check your network connection settings.</p>\n      </ion-col>\n    </ion-row>\n\n    <ng-container *ngIf="networkService.connected" >\n      <ion-row>\n        <ion-col no-padding>\n          <img [src]="track.img" style="width: 100%;" [alt]="track.title" />\n        </ion-col>\n      </ion-row>\n\n      <ion-row padding>\n        <ion-col no-padding>\n          <p no-margin>{{ track.description }}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row padding>\n\n        <ion-col col-12 class="room-map-wrapper" >\n          <img class="room-map" src="https://firebasestorage.googleapis.com/v0/b/audio-guide-b67da.appspot.com/o/Screen%20Shot%202017-12-01%20at%205.27.14%20PM.png?alt=media&token=3f8fbabe-fb4d-4bff-9037-34f8160fc101" alt="Room Map" />\n          <ng-container *ngFor="let pin of pins">\n            <ion-icon [class.located]="locatedPin === pin" class="map-pin" color="primary" [style.top]="pin.x_coord + \'px\'"\n              [style.left]="pin.y_coord + \'px\'" name="md-pin" >\n              <span class="pin-id">{{ pin.id + 1 }}</span>\n            </ion-icon>\n          </ng-container>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-fab top right *ngIf="!audioPlayerService.selectedTrack || audioPlayerService.selectedTrack !== track" class="track-play-fab" >\n        <button ion-fab (click)="onPlayTrack(track)" >\n        <ion-icon name="ios-play"></ion-icon>\n        </button>\n      </ion-fab>\n\n    </ng-container>\n\n  </ion-grid>\n</ion-content>\n<ng-container *ngIf="networkService.connected" >\n  <ion-footer *ngIf="audioPlayerService.selectedTrack && audioPlayerService.selectedTrack === track" color="light" style="background: #f8f8f8;" padding >\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 text-center>\n          <button ion-button clear (click)="onGoToTrack(prevTrack)" ><ion-icon name="ios-skip-backward" color="primary"></ion-icon></button>\n        </ion-col>\n        <ion-col col-4 text-center>\n          <button ion-button clear *ngIf="!audioPlayerService.selectedTrack.playing" (click)="onResumeTrack()" >\n            <ion-icon name="ios-play" color="primary"></ion-icon>\n          </button>\n          <button ion-button clear *ngIf="audioPlayerService.selectedTrack.playing" (click)="onPauseTrack()" >\n            <ion-icon name="ios-pause" color="primary"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col col-4 text-center>\n          <button ion-button clear (click)="onGoToTrack(nextTrack)" ><ion-icon name="ios-skip-forward" color="primary"></ion-icon></button>\n        </ion-col>\n        <ion-col col-12>\n            <progress-bar [progress]="audioPlayerService.selectedTrack.progress"></progress-bar>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-footer>\n</ng-container>\n'/*ion-inline-end:"/Users/justinestrada/Sites/audio-guide/src/pages/tracks/track/track.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_network__["a" /* NetworkService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_audio_player__["a" /* AudioPlayerService */]])
    ], TrackPage);
    return TrackPage;
    var TrackPage_1;
}());

//# sourceMappingURL=track.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LocationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationsPage = (function () {
    function LocationsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LocationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationsPage');
    };
    LocationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-locations',template:/*ion-inline-start:"/Users/justinestrada/Sites/audio-guide/src/pages/locations/locations.html"*/'<!--\n  Generated template for the LocationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>locations</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/justinestrada/Sites/audio-guide/src/pages/locations/locations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LocationsPage);
    return LocationsPage;
}());

//# sourceMappingURL=locations.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_exhibit_exhibit__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_exhibits_exhibits__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_buildings_buildings__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_rooms_rooms__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tracks_tracks__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tracks_track_track__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_accordion_accordion__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_progress_bar_progress_bar__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_network__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_data__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_audio_player__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_toast__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_network__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_exhibit_exhibit__["a" /* ExhibitPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_exhibits_exhibits__["a" /* ExhibitsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_buildings_buildings__["a" /* BuildingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_rooms_rooms__["a" /* RoomsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tracks_tracks__["a" /* TracksPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tracks_track_track__["a" /* TrackPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__components_accordion_accordion__["a" /* AccordionComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/locations/locations.module#LocationsPageModule', name: 'LocationsPage', segment: 'locations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_exhibit_exhibit__["a" /* ExhibitPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_exhibits_exhibits__["a" /* ExhibitsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_buildings_buildings__["a" /* BuildingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_rooms_rooms__["a" /* RoomsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tracks_tracks__["a" /* TracksPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tracks_track_track__["a" /* TrackPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__services_network__["a" /* NetworkService */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_17__services_data__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_18__services_audio_player__["a" /* AudioPlayerService */],
                __WEBPACK_IMPORTED_MODULE_19__services_toast__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_exhibit_exhibit__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_buildings_buildings__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_network__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { TabsPage } from '../pages/tabs/tabs';

// import { ExhibitsPage } from '../pages/exhibits/exhibits';
// import { TracksPage } from '../pages/tracks/tracks';



var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, networkService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.networkService = networkService;
        // rootPage: any = TabsPage;
        // rootPage: any = ExhibitsPage;
        // rootPage: any = TracksPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_buildings_buildings__["a" /* BuildingsPage */];
        this.exhibitPage = __WEBPACK_IMPORTED_MODULE_4__pages_exhibit_exhibit__["a" /* ExhibitPage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.statusBar.backgroundColorByHexString('#488aff');
            _this.splashScreen.hide();
            _this.networkService.onWatchNetworkConnection();
        });
    };
    MyApp.prototype.onGoTo = function (page) {
        this.activePage = page;
        this.nav.setRoot(page);
        // this.nav.setRoot(this.rootPage);
        // this.nav.setPages( [ page ] );
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/justinestrada/Sites/audio-guide/src/app/app.html"*/'<ion-menu [content]="nav">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item icon-left\n        (click)="onGoTo(rootPage)" >\n        <ion-icon name="ios-headset"></ion-icon>\n        Audio Tour\n      </button>\n      <button ion-item icon-left\n        (click)="onGoTo(exhibitPage)" >\n        <ion-icon name="ios-home"></ion-icon>\n        Uffizi Gallery\n      </button>\n      <button ion-item icon-left\n        (click)="onGoTo(settingsPage)" >\n        <ion-icon name="ios-settings"></ion-icon>\n        Settings\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #nav swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/justinestrada/Sites/audio-guide/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_7__services_network__["a" /* NetworkService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rooms_rooms__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tracks_tracks__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.roomsRoot = __WEBPACK_IMPORTED_MODULE_1__rooms_rooms__["a" /* RoomsPage */];
        this.tracksRoot = __WEBPACK_IMPORTED_MODULE_2__tracks_tracks__["a" /* TracksPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/justinestrada/Sites/audio-guide/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="roomsRoot" tabTitle="Rooms" tabIcon="ios-home"></ion-tab>\n  <ion-tab [root]="tracksRoot" tabTitle="Tracks" tabIcon="ios-map"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/justinestrada/Sites/audio-guide/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buildings_buildings__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExhibitsPage = (function () {
    function ExhibitsPage(navCtrl, navParams, dataService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.loadingCtrl = loadingCtrl;
        this.data = {};
        this.exhibits = [];
        this.getExhibits();
    }
    ExhibitsPage.prototype.getExhibits = function () {
        var _this = this;
        this.onLoading('Loading exhibits..');
        this.dataService.fetchExhibits().subscribe(function (this_data) {
            _this.data = this_data;
            _this.exhibits = this_data;
            _this.loading.dismiss();
            console.log(_this.data);
        });
        // this.authService.getActiveUser().getIdToken()
        //   .then(
        //     ( token: string ) => {
        //       this.onLoading('Loading Users');
        //       this.dataService.fetchBuildings( token ).subscribe( (data) => {
        //         // alert('test');
        //         // console.log(data);
        //         for (let key in data) {
        //           if( data.hasOwnProperty(key) ) {
        //             this.users.push( data[key] );
        //           }
        //         }
        //         this.onSortUsers(true);
        //         this.loading.dismiss();
        //       }, (err) => {
        //         console.log(err);
        //         this.loading.dismiss();
        //         this.onHandleError(err);
        //       });
        //     }
        //   );
    };
    ExhibitsPage.prototype.onLoading = function (message) {
        this.loading = this.loadingCtrl.create({
            content: message
        });
        this.loading.present();
    };
    ExhibitsPage.prototype.onGoToBuildings = function (this_exhibit) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__buildings_buildings__["a" /* BuildingsPage */], { exhibit: this_exhibit });
    };
    ExhibitsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exhibits',template:/*ion-inline-start:"/Users/justinestrada/Sites/audio-guide/src/pages/exhibits/exhibits.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Exhibits</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <ion-img width="176" height="176" src="https://placebear.com/300/300" alt="Exhibit"></ion-img>\n      </ion-col>\n    </ion-row>\n      <ion-list>\n        <button ion-item *ngFor="let exhibit of exhibits" (click)="onGoToBuildings(exhibit)">\n          <ion-icon name="ios-home" item-start></ion-icon>\n          <h3>{{ exhibit.name }}</h3>\n        </button>\n      </ion-list>\n    <!-- <ion-row>\n      <ion-col>\n\n<ion-list [virtualScroll]="items">\n\n  <ion-item *virtualItem="let item">\n    <ion-avatar item-start>\n      <ion-img [src]="item.avatarUrl"></ion-img>\n    </ion-avatar>\n    {{ item.firstName }} {{ item.lastName }}\n  </ion-item>\n\n</ion-list>\n\n      </ion-col>\n    </ion-row> -->\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/justinestrada/Sites/audio-guide/src/pages/exhibits/exhibits.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_data__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ExhibitsPage);
    return ExhibitsPage;
}());

//# sourceMappingURL=exhibits.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/justinestrada/Sites/audio-guide/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only\n        menuToggle >\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>About Audio Guide</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <ion-list>\n          <ion-item-divider>Version</ion-item-divider>\n          <ion-item>\n            <ion-icon name="md-git-commit" item-right></ion-icon>\n            <p>V 1.0</p>\n          </ion-item>\n          <ion-item-divider>This app is sponsored by:</ion-item-divider>\n          <ion-item>\n            <a href="https://mydigitalsauce.com/" title="MyDigitalSauce" target="_blank">MyDigitalSauce</a>\n              <ion-thumbnail item-right>\n                  <ion-img src="img/mydigitalsauce-logo.jpg" alt="MyDigitalSauce" ></ion-img>\n              </ion-thumbnail>\n          </ion-item>\n          <ion-item>\n            <a href="http://www.procomeng.com/" title="Procom Engineering Inc" target="_blank">Procom Engineering Inc</a>\n              <ion-thumbnail item-right>\n                  <ion-img src="img/socal-smokin-bbq-logo.jpg" alt="Procom Engineering Inc" ></ion-img>\n              </ion-thumbnail>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/justinestrada/Sites/audio-guide/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccordionComponent = (function () {
    // constructor is loaded before view of application is loaded
    function AccordionComponent(renderer) {
        this.renderer = renderer;
        this.accordionExpanded = false;
        this.accordionIcon = "ios-arrow-down";
        // console.log(this.name);
    }
    // executes after view is completely initialized
    AccordionComponent.prototype.ngOnInit = function () {
        this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "height: 500ms, padding: 500ms");
    };
    AccordionComponent.prototype.onToggleAccordion = function () {
        if (this.accordionExpanded) {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "height", "0");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0");
        }
        else {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "height", "auto");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "16px");
        }
        this.accordionExpanded = !this.accordionExpanded;
        this.accordionIcon = (this.accordionIcon === "ios-arrow-down") ? "ios-arrow-up" : "ios-arrow-down";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("name"),
        __metadata("design:type", String)
    ], AccordionComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("cardContent"),
        __metadata("design:type", Object)
    ], AccordionComponent.prototype, "cardContent", void 0);
    AccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'accordion',template:/*ion-inline-start:"/Users/justinestrada/Sites/audio-guide/src/components/accordion/accordion.html"*/'<ion-card>\n  <ion-card-header>\n    <ion-list>\n      <ion-item style="border: none;">\n        <h3 (click)="onToggleAccordion()">{{ name }}</h3>\n        <button ion-button item-right clear (click)="onToggleAccordion()">\n          <ion-icon [name]="accordionIcon"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n  </ion-card-header>\n  <ion-card-content #cardContent>\n    <ng-content></ng-content>\n  </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/Users/justinestrada/Sites/audio-guide/src/components/accordion/accordion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], AccordionComponent);
    return AccordionComponent;
}());

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"/Users/justinestrada/Sites/audio-guide/src/components/progress-bar/progress-bar.html"*/'<div class="progress-outer">\n    <div class="progress-inner" [style.width]="progress + \'%\'">\n    </div>\n</div>\n'/*ion-inline-end:"/Users/justinestrada/Sites/audio-guide/src/components/progress-bar/progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Observable} from 'rxjs';

var NetworkService = (function () {
    function NetworkService(network, toastService) {
        this.network = network;
        this.toastService = toastService;
        this.connected = true;
    }
    NetworkService.prototype.onWatchNetworkConnection = function () {
        var _this = this;
        this.network.onDisconnect().subscribe(function () {
            console.log('Network disconnected.');
            _this.toastService.showBasicToast('Disconnected from network.');
            _this.connected = false;
        });
        this.network.onConnect().subscribe(function () {
            console.log('Network connected.');
            _this.toastService.showBasicToast('Connected to network.');
            _this.connected = true;
        });
    };
    NetworkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_2__toast__["a" /* ToastService */]])
    ], NetworkService);
    return NetworkService;
}());

//# sourceMappingURL=network.js.map

/***/ })

},[354]);
//# sourceMappingURL=main.js.map