import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContextMenuComponent } from './context-menu.component';

describe('MyContextMenuComponent', () => {
  let component: MyContextMenuComponent;
  let fixture: ComponentFixture<MyContextMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyContextMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
