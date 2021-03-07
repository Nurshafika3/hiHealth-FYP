import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatallergyPage } from './whatallergy.page';

describe('WhatallergyPage', () => {
  let component: WhatallergyPage;
  let fixture: ComponentFixture<WhatallergyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatallergyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatallergyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
