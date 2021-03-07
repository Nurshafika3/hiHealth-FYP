import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AukidneyPage } from './aukidney.page';

describe('AukidneyPage', () => {
  let component: AukidneyPage;
  let fixture: ComponentFixture<AukidneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AukidneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AukidneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
