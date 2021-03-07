import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomdiaPage } from './symptomdia.page';

describe('SymptomdiaPage', () => {
  let component: SymptomdiaPage;
  let fixture: ComponentFixture<SymptomdiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomdiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomdiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
