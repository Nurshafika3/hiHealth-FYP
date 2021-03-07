import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomdenguePage } from './symptomdengue.page';

describe('SymptomdenguePage', () => {
  let component: SymptomdenguePage;
  let fixture: ComponentFixture<SymptomdenguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomdenguePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomdenguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
