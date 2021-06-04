import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElilgibilityCriteriaComponent } from './elilgibility-criteria.component';

describe('ElilgibilityCriteriaComponent', () => {
  let component: ElilgibilityCriteriaComponent;
  let fixture: ComponentFixture<ElilgibilityCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElilgibilityCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElilgibilityCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
