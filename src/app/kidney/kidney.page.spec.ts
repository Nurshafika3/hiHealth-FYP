import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KidneyPage } from './kidney.page';

describe('KidneyPage', () => {
  let component: KidneyPage;
  let fixture: ComponentFixture<KidneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KidneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
