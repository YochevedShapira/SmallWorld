import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelerRequestComponent } from './traveler-request.component';

describe('TravelerRequestComponent', () => {
  let component: TravelerRequestComponent;
  let fixture: ComponentFixture<TravelerRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelerRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
