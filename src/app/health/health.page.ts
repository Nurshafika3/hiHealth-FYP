import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {

  constructor() { }

ngOnInit() {
	

}
  option = {
  slidesPerView: 1.5,
	centeredSlides: true,
	loop: true,
	spaceBetween: 10,
	autoplay: true,
  }

}
