import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  features = {
    featureList_1: [
      {
        image: 'assets/images/get-paid.png',
        name: 'Quick cash disbursement',
        description: 'Get terms loans that your business needs within 72 hrs'
      },
      {
        image: 'assets/images/low_interest.png',
        name: 'Low-interest rate',
        description: 'Achieve your financial goals with an amazing interest rate starting at 13% per annum'
      },
      {
        image: 'assets/images/secure_payments.png',
        name: 'Zero Paperwork',
        description: 'Get started instantly by submitting only your basic details & bank statements'
      }
    ],
    featureList_2: [
      {
        image: 'assets/images/devices.png',
        name: 'Ace your business finances',
        description: 'Manage banking, accounting & everything in between, on one platform'
      },
      {
        image: 'assets/images/covid.png',
        name: 'Loans to fight COVID-19',
        description: 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh'
      }
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
