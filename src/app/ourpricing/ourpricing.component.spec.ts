import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurpricingComponent } from './ourpricing.component';

describe('OurpricingComponent', () => {
  let component: OurpricingComponent;
  let fixture: ComponentFixture<OurpricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurpricingComponent]
    });
    fixture = TestBed.createComponent(OurpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
