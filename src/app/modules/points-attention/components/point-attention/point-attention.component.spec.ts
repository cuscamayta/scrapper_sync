import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointAttentionComponent } from './point-attention.component';

describe('PointAttentionComponent', () => {
  let component: PointAttentionComponent;
  let fixture: ComponentFixture<PointAttentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointAttentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointAttentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
