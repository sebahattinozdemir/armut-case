import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeId4Component } from './type-id4.component';

describe('TypeId4Component', () => {
  let component: TypeId4Component;
  let fixture: ComponentFixture<TypeId4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeId4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeId4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
