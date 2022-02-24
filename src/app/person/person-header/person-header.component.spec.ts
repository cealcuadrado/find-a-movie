import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonHeaderComponent } from './person-header.component';

describe('PersonHeaderComponent', () => {
  let component: PersonHeaderComponent;
  let fixture: ComponentFixture<PersonHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
