import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatkidneyPage } from './whatkidney.page';

describe('WhatkidneyPage', () => {
  let component: WhatkidneyPage;
  let fixture: ComponentFixture<WhatkidneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatkidneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatkidneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
