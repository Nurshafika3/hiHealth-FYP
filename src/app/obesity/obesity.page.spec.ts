import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObesityPage } from './obesity.page';

describe('ObesityPage', () => {
  let component: ObesityPage;
  let fixture: ComponentFixture<ObesityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObesityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObesityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
