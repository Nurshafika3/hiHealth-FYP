import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomocdPage } from './symptomocd.page';

describe('SymptomocdPage', () => {
  let component: SymptomocdPage;
  let fixture: ComponentFixture<SymptomocdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomocdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomocdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
