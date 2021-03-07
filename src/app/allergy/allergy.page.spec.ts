import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllergyPage } from './allergy.page';

describe('AllergyPage', () => {
  let component: AllergyPage;
  let fixture: ComponentFixture<AllergyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllergyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
