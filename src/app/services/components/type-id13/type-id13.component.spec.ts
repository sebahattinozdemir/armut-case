import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeId13Component } from './type-id13.component';

describe('TypeId13Component', () => {
  let component: TypeId13Component;
  let fixture: ComponentFixture<TypeId13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeId13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeId13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
