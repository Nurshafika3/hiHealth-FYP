import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomeyesPage } from './symptomeyes.page';

describe('SymptomeyesPage', () => {
  let component: SymptomeyesPage;
  let fixture: ComponentFixture<SymptomeyesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomeyesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomeyesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
