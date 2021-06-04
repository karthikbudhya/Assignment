import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  showScroll = false;
  @HostListener('window:scroll', [])
  onWindowScroll() 
  { 
    if (window.pageYOffset === 0) {
      this.showScroll = false;
    }
    else {   
      this.showScroll = true;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  getStarted(): void { }

  login(): void { }
}
