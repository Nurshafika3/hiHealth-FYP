import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomobePage } from './symptomobe.page';

describe('SymptomobePage', () => {
  let component: SymptomobePage;
  let fixture: ComponentFixture<SymptomobePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomobePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomobePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
