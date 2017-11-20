import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MqButtonComponent } from './mq-button.component';

describe('MqButtonComponent', () => {
  let component: MqButtonComponent;
  let fixture: ComponentFixture<MqButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MqButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MqButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
