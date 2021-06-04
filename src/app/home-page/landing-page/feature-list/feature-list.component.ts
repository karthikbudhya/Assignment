import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss']
})
export class FeatureListComponent implements OnInit {

  @Input('features') features: any | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  openAccount(): void {
    
  }
}
