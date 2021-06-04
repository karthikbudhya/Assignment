import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomswitchComponent } from './customswitch.component';

describe('CustomswitchComponent', () => {
  let component: CustomswitchComponent;
  let fixture: ComponentFixture<CustomswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
