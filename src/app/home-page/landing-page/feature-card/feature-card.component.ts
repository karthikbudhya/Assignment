import { Component, Input, OnInit } from '@angular/core';
import { FeatureCardData } from '../../shared/interfaces/interface';

@Component({
  selector: 'feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {

  @Input('cardData') cardData : FeatureCardData | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
