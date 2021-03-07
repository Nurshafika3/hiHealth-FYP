import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddisonPage } from './addison.page';

describe('AddisonPage', () => {
  let component: AddisonPage;
  let fixture: ComponentFixture<AddisonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddisonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddisonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
