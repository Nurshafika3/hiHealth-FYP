import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutastePage } from './autaste.page';

describe('AutastePage', () => {
  let component: AutastePage;
  let fixture: ComponentFixture<AutastePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutastePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutastePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
