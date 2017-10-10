import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageMusiciansComponent } from './message-musicians.component';

describe('MessageMusiciansComponent', () => {
  let component: MessageMusiciansComponent;
  let fixture: ComponentFixture<MessageMusiciansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageMusiciansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageMusiciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
