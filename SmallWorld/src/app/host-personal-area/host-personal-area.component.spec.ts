import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostPersonalAreaComponent } from './host-personal-area.component';

describe('HostPersonalAreaComponent', () => {
  let component: HostPersonalAreaComponent;
  let fixture: ComponentFixture<HostPersonalAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostPersonalAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostPersonalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
