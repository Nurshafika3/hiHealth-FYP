import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomdepressPage } from './symptomdepress.page';

describe('SymptomdepressPage', () => {
  let component: SymptomdepressPage;
  let fixture: ComponentFixture<SymptomdepressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomdepressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomdepressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
