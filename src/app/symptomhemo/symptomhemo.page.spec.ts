import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomhemoPage } from './symptomhemo.page';

describe('SymptomhemoPage', () => {
  let component: SymptomhemoPage;
  let fixture: ComponentFixture<SymptomhemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomhemoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomhemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
