import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomsalmonPage } from './symptomsalmon.page';

describe('SymptomsalmonPage', () => {
  let component: SymptomsalmonPage;
  let fixture: ComponentFixture<SymptomsalmonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomsalmonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomsalmonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
