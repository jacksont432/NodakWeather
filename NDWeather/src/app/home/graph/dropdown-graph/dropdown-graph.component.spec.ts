import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownGraphComponent } from './dropdown-graph.component';

describe('DropdownGraphComponent', () => {
  let component: DropdownGraphComponent;
  let fixture: ComponentFixture<DropdownGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
