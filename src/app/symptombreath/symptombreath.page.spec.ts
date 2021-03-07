import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptombreathPage } from './symptombreath.page';

describe('SymptombreathPage', () => {
  let component: SymptombreathPage;
  let fixture: ComponentFixture<SymptombreathPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptombreathPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptombreathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
