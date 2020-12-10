import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListitemspageComponent } from './listitemspage.component';

describe('ListitemspageComponent', () => {
  let component: ListitemspageComponent;
  let fixture: ComponentFixture<ListitemspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListitemspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListitemspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
