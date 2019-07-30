import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativePocketComponent } from './cumulative-pocket.component';

describe('CumulativePocketComponent', () => {
  let component: CumulativePocketComponent;
  let fixture: ComponentFixture<CumulativePocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumulativePocketComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumulativePocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
