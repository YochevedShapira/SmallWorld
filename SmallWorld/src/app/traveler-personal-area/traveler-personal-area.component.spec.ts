import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelerPersonalAreaComponent } from './traveler-personal-area.component';

describe('TravelerPersonalAreaComponent', () => {
  let component: TravelerPersonalAreaComponent;
  let fixture: ComponentFixture<TravelerPersonalAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelerPersonalAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelerPersonalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
