import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomsleepPage } from './symptomsleep.page';

describe('SymptomsleepPage', () => {
  let component: SymptomsleepPage;
  let fixture: ComponentFixture<SymptomsleepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomsleepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomsleepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
