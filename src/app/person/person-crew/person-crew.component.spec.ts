import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCrewComponent } from './person-crew.component';

describe('PersonCrewComponent', () => {
  let component: PersonCrewComponent;
  let fixture: ComponentFixture<PersonCrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonCrewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
