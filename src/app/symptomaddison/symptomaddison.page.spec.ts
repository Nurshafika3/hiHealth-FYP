import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomaddisonPage } from './symptomaddison.page';

describe('SymptomaddisonPage', () => {
  let component: SymptomaddisonPage;
  let fixture: ComponentFixture<SymptomaddisonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomaddisonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomaddisonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
