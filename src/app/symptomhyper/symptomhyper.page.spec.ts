import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomhyperPage } from './symptomhyper.page';

describe('SymptomhyperPage', () => {
  let component: SymptomhyperPage;
  let fixture: ComponentFixture<SymptomhyperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomhyperPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomhyperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
