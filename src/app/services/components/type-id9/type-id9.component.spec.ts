import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeId9Component } from './type-id9.component';

describe('TypeId9Component', () => {
  let component: TypeId9Component;
  let fixture: ComponentFixture<TypeId9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeId9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeId9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
