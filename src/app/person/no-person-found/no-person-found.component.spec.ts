import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPersonFoundComponent } from './no-person-found.component';

describe('NoPersonFoundComponent', () => {
  let component: NoPersonFoundComponent;
  let fixture: ComponentFixture<NoPersonFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPersonFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPersonFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
