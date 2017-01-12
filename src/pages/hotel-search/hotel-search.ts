import { Component, Input, Pipe } from '@angular/core';

@Component({
  selector: 'hotel-search',
  templateUrl: './hotel-search.html',
  styleUrls: ['./hotel-search.css']
})
export class HotelSearchComponent {
  editSearchShow = false;
  filterShow = false;
  placeSearch = "Berlín";
  arriveDate = "2016-11-16";
  leaveDate = "2016-11-23";
  guests = 2;
  hotels = [{
			"name" : "Hotel Emperador",
			"stars" : "3",
			"price" : 1596,
			"promotion": undefined,
			"img": "emperador.jpg",
			"recomended": true,
			"services": {
				"bar": true,
				"beach": true,
				"checkin": true,
				"breakfast": true,
				"gym": true,
				"clean": true,
				"wifi": false,
				"tv": false,
				"admin": false
			},
			"payMethods": {
				"quota": true,
				"destination": true
			}
		},
		{
			"name" : "Petit Palace San Bernardo",
			"stars" : "4",
			"price" : 2145,
			"promotion": undefined,
			"img": "petit-palace.jpg",
			"recomended": true,
			"services": {
				"bar": false,
				"beach": true,
				"checkin": true,
				"breakfast": false,
				"gym": false,
				"clean": true,
				"wifi": true,	
				"tv": true,
				"admin": true
			},
			"payMethods": {
				"quota": false,
				"destination": true
			}
		},
		{
			"name" : "Hotel Nuevo Boston",
			"stars" : "2",
			"price" : 1118,
			"promotion": 861,
			"img": "boston.jpg",
			"recomended": false,
			"services": {
				"bar": true,
				"beach": true,
				"checkin": true,
				"breakfast": true,
				"gym": true,
				"clean": false,
				"wifi": false,
				"tv": false,
				"admin": true
			},
			"payMethods": {
				"quota": true,
				"destination": false
			}
		}]
}
