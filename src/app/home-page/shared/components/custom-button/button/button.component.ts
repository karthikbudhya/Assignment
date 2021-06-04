import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input('transparent') transparentButton: boolean | undefined;
  @Input('label') label: string | undefined;
  @Output('buttonClicked') buttonClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  userButtonClick(): void {
    this.buttonClicked.emit();
  }
}
