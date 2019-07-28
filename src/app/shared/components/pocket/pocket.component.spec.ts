import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketComponent } from './pocket.component';

describe('PocketComponent', () => {
  let component: PocketComponent;
  let fixture: ComponentFixture<PocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as value not null`, () => {
    fixture = TestBed.createComponent(PocketComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.value).toBeDefined();
  });
});
