import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockscreenComponent } from './lock-screen.component';

describe('LockscreenComponent', () => {
  let component: LockscreenComponent;
  let fixture: ComponentFixture<LockscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
