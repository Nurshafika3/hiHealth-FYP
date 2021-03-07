import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HemoPage } from './hemo.page';

describe('HemoPage', () => {
  let component: HemoPage;
  let fixture: ComponentFixture<HemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HemoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
