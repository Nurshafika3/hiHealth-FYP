import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuallergyPage } from './auallergy.page';

describe('AuallergyPage', () => {
  let component: AuallergyPage;
  let fixture: ComponentFixture<AuallergyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuallergyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuallergyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
