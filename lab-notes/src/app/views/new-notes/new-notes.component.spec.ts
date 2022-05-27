import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNotesComponent } from './new-notes.component';

describe('NewNotesComponent', () => {
  let component: NewNotesComponent;
  let fixture: ComponentFixture<NewNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
