import { Component , ViewChild,ElementRef, } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { NavController, Nav } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

declare var google;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  casa:any

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  local_json = 'https://acompanhantes-59869.firebaseio.com/casa_noturna.json';
  
  constructor(public navCtrl: NavController,
              public http: HttpClient,
              public geolocation: Geolocation,
              public plt: Platform,
              public nav: Nav) { }

              
ionViewDidLoad(){
  this.displayGoogleMap();
  this.getMarkers();
}

displayGoogleMap(){
  let latLng = new google.maps.LatLng(-23.550024, -46.632906);
  let mapOptions = {
  center:latLng,
  zoom:7,
  disableDefaultUI: true,
  styles:[
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ],
  mapTypeId : google.maps.MapTypeId.ROADMAP
  }
  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
}

getMarkers(){
  this.http.get(this.local_json)
  .subscribe(data=>{this.addMarkersMap(data);});
}

addMarkersMap(markers){
for(let marker of markers){
    var _position = {lat: marker.latitude , lng: marker.longitude};
    var _content = String( marker.content );
    var _icon = 'https://firebasestorage.googleapis.com/v0/b/acompanhantes-59869.appspot.com/o/Aplicativo_objs%2Fmarker_casa.png?alt=media&token=d918569a-af97-4549-872e-82b8629dd13e'; 

    marker = new google.maps.Marker({
      position: _position,
      map: this.map,
      icon: _icon,
      animation: google.maps.Animation.DROP,
    });

    let infowindow = new google.maps.InfoWindow({
      maxWidth: 228,
      content: _content,
    }); 

    marker.addListener('click', function() {
      this.streetViewPanorama = this.map.getStreetView();
      infowindow.open(this.map, marker);
      });
    
  }
}

obtlocal(){
  this.geolocation.getCurrentPosition().then((position) => {
    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    let mapOptions = {
      center:latLng,
      zoom:15,
      disableDefaultUI: true,
      styles:[
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }
      ],
      mapTypeId : google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.getMarkers();

  }, (erro) => {
    console.log(erro);
  }); 
}

  

  //detalhes(CASA){
  //  this.navCtrl.push(MostrarCasaPage, {
  //   id : CASA.id ,
  //   name : CASA.name
  // });
    //console.log('USER ID É INGUAL A ='+AUSER.thumbnailUrl)
    //console.log('USER ID É INGUAL A ='+AUSER.title)
 //}


}