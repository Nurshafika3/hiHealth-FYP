import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomearPage } from './symptomear.page';

describe('SymptomearPage', () => {
  let component: SymptomearPage;
  let fixture: ComponentFixture<SymptomearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
