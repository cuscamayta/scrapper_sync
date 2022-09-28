import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValencianaComponent } from './valenciana.component';

describe('CatalanaComponent', () => {
  let component: ValencianaComponent;
  let fixture: ComponentFixture<ValencianaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValencianaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValencianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
