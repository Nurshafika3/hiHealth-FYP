import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatsleepPage } from './whatsleep.page';

describe('WhatsleepPage', () => {
  let component: WhatsleepPage;
  let fixture: ComponentFixture<WhatsleepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsleepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatsleepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
