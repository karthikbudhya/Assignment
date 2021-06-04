import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input('minValue') minValue: number | undefined;
  @Input('maxValue') maxValue: number | undefined;
  @Input('value') value: number | undefined;
  @Input('step') step: number | undefined;

  // @Input() set value(initValue: any) {
  //   console.log('init value', typeof initValue);
    
  // }
  minValue1 = 0;
  maxValue1 = 100;
  value1 = 100;
  constructor() { }

  ngOnInit(): void {
  }

}
