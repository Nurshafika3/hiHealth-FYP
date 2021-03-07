import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatsalmonPage } from './whatsalmon.page';

describe('WhatsalmonPage', () => {
  let component: WhatsalmonPage;
  let fixture: ComponentFixture<WhatsalmonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsalmonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatsalmonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
