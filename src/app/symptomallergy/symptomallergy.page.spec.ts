import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomallergyPage } from './symptomallergy.page';

describe('SymptomallergyPage', () => {
  let component: SymptomallergyPage;
  let fixture: ComponentFixture<SymptomallergyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomallergyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomallergyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
