import { Component, Input } from '@angular/core';

@Component({
  selector: 'search-filters',
  templateUrl: './search-filters.html',
  styleUrls: ['./search-filters.css']
})

export class HotelSearchFiltersComponent {
	nameShow = false;
	priceShow = false;
	starShow = false;
	regimenShow = false;

	starAllSearch = true;
	star5Search = false;
	star4Search = false;
	star3Search = false;
	star2Search = false;
	star1Search = false;

	regimenAll = true;
	regimenBedBrk = false;
	regimenBed = false;
	regimenFullBrk = false;
	regimenBrk2 = false;
	regimenBrk = false;

	payAll = true;
	payDestiny = false;
	payQuota = false;

	disableAllStars() {
		this.starAllSearch = false;
	}

	disableSpecificStars() {
		this.star5Search = false;
		this.star4Search = false;
		this.star3Search = false;
		this.star2Search = false;
		this.star1Search = false;
	}

	disableAllReg() {
		this.regimenAll = false;
	}

	disableSpecificReg() {
		this.regimenBedBrk = false;
		this.regimenBed = false;
		this.regimenFullBrk = false;
		this.regimenBrk2 = false;
		this.regimenBrk = false;
	}

	disableAllPay() {
		this.payAll = false;
	}

	disableSpecificPay() {
		this.payDestiny = false;
		this.payQuota = false;
	}

}