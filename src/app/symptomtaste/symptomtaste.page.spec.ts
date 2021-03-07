import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomtastePage } from './symptomtaste.page';

describe('SymptomtastePage', () => {
  let component: SymptomtastePage;
  let fixture: ComponentFixture<SymptomtastePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomtastePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomtastePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
