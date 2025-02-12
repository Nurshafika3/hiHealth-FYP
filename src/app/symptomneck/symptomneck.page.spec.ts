import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomneckPage } from './symptomneck.page';

describe('SymptomneckPage', () => {
  let component: SymptomneckPage;
  let fixture: ComponentFixture<SymptomneckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomneckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomneckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
