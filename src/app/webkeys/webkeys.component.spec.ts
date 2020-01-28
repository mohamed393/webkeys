import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebkeysComponent } from './webkeys.component';

describe('WebkeysComponent', () => {
  let component: WebkeysComponent;
  let fixture: ComponentFixture<WebkeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebkeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
