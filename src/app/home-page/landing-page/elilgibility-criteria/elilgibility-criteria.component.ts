import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elilgibility-criteria',
  templateUrl: './elilgibility-criteria.component.html',
  styleUrls: ['./elilgibility-criteria.component.scss']
})
export class ElilgibilityCriteriaComponent implements OnInit {

  income: number | undefined;
  tenurePeriod = [
    {
      value: 3,
      label:  '3 Months'
    },
    {
      value: 6,
      label:  '6 Months'
    },
    {
      value: 9,
      label:  '9 Months'
    },
    {
      value: 12,
      label:  '12 Months'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
