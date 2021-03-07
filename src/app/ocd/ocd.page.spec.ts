import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OcdPage } from './ocd.page';

describe('OcdPage', () => {
  let component: OcdPage;
  let fixture: ComponentFixture<OcdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OcdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
