import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomkidneyPage } from './symptomkidney.page';

describe('SymptomkidneyPage', () => {
  let component: SymptomkidneyPage;
  let fixture: ComponentFixture<SymptomkidneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomkidneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomkidneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
