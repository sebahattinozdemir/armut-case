import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeId6Component } from './type-id6.component';

describe('TypeId6Component', () => {
  let component: TypeId6Component;
  let fixture: ComponentFixture<TypeId6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeId6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeId6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
