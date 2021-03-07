import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhathemoPage } from './whathemo.page';

describe('WhathemoPage', () => {
  let component: WhathemoPage;
  let fixture: ComponentFixture<WhathemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhathemoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhathemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
