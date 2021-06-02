import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeId8Component } from './type-id8.component';

describe('TypeId8Component', () => {
  let component: TypeId8Component;
  let fixture: ComponentFixture<TypeId8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeId8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeId8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
