import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarPeopleComponent } from './bar-people.component';

describe('BarPeopleComponent', () => {
  let component: BarPeopleComponent;
  let fixture: ComponentFixture<BarPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
