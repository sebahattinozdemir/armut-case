import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeId11Component } from './type-id11.component';

describe('TypeId11Component', () => {
  let component: TypeId11Component;
  let fixture: ComponentFixture<TypeId11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeId11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeId11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
