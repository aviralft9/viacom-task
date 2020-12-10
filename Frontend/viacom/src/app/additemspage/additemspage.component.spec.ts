import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemspageComponent } from './additemspage.component';

describe('AdditemspageComponent', () => {
  let component: AdditemspageComponent;
  let fixture: ComponentFixture<AdditemspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditemspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditemspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
