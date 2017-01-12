import { Component, Input } from '@angular/core';

@Component({
  selector: 'search-card',
  templateUrl: './search-card.html',
  styleUrls: ['./search-card.css']
})

export class HotelSearchCardComponent {
	@Input('hotel') hotel: {
		"name" : string,
			"stars" : string,
			"price" : number,
			"promotion": number,
			"img": string,
			"discount": number,
			"recomended": boolean,
			"services": {
				"bar": boolean,
				"beach": boolean,
				"checkin": boolean,
				"breakfast": boolean,
				"gym": boolean,
				"clean": boolean,
				"wifi": boolean,
				"tv": boolean,
				"admin": boolean
			},
			"payMethods": {
				"quota": boolean,
				"destination": boolean
			};
	};

	starsNum(stars) {
		return new Array(parseInt(stars));
	}

	getDiscount(promotion, price) {
		return Math.round(100 - promotion / price * 100);
	}

}