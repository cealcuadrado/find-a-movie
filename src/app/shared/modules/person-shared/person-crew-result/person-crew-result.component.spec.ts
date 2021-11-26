import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCrewResultComponent } from './person-crew-result.component';

describe('PersonCrewResultComponent', () => {
  let component: PersonCrewResultComponent;
  let fixture: ComponentFixture<PersonCrewResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonCrewResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCrewResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
