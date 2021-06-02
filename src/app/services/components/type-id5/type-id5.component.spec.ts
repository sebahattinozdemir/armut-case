import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeId5Component } from './type-id5.component';

describe('TypeId5Component', () => {
  let component: TypeId5Component;
  let fixture: ComponentFixture<TypeId5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeId5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeId5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
