import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalanaComponent } from './catalana.component';

describe('CatalanaComponent', () => {
  let component: CatalanaComponent;
  let fixture: ComponentFixture<CatalanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
