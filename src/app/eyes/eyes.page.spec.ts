import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EyesPage } from './eyes.page';

describe('EyesPage', () => {
  let component: EyesPage;
  let fixture: ComponentFixture<EyesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EyesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
