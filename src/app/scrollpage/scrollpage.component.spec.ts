import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollpageComponent } from './scrollpage.component';

describe('ScrollpageComponent', () => {
  let component: ScrollpageComponent;
  let fixture: ComponentFixture<ScrollpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollpageComponent]
    });
    fixture = TestBed.createComponent(ScrollpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
