import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCastResultComponent } from './person-cast-result.component';

describe('PersonCastResultComponent', () => {
  let component: PersonCastResultComponent;
  let fixture: ComponentFixture<PersonCastResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonCastResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCastResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
