import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomelbowPage } from './symptomelbow.page';

describe('SymptomelbowPage', () => {
  let component: SymptomelbowPage;
  let fixture: ComponentFixture<SymptomelbowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomelbowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomelbowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
