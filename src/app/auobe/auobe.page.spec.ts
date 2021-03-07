import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuobePage } from './auobe.page';

describe('AuobePage', () => {
  let component: AuobePage;
  let fixture: ComponentFixture<AuobePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuobePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuobePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
