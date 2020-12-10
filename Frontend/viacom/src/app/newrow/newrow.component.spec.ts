import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrowComponent } from './newrow.component';

describe('NewrowComponent', () => {
  let component: NewrowComponent;
  let fixture: ComponentFixture<NewrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
