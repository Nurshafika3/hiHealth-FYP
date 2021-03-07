import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomasthmaPage } from './symptomasthma.page';

describe('SymptomasthmaPage', () => {
  let component: SymptomasthmaPage;
  let fixture: ComponentFixture<SymptomasthmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomasthmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomasthmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
