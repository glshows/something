import { Component, OnInit } from '@angular/core';

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 // google maps zoom level
 zoom: number = 8;
  
 // initial center position for the map
 lat: number = 51.673858;
 lng: number = 7.815982;

 clickedMarker(label: string, index: number) {
   console.log(`clicked the marker: ${label || index}`)
 }
 
 mapClicked($event: any) {
   this.markers.push({
     lat: $event.coords.lat,
     lng: $event.coords.lng,
     draggable: true
   });
 }
 
 markerDragEnd(m: marker, $event: any) {
   console.log('dragEnd', m, $event);
 }
 
 markers: marker[] = [
   {
     lat: 51.673858,
     lng: 7.815982,
     label: 'A',
     draggable: true
   },
   {
     lat: 51.373858,
     lng: 7.215982,
     label: 'B',
     draggable: false
   },
   {
     lat: 51.723858,
     lng: 7.895982,
     label: 'C',
     draggable: true
   }
 ]
}
