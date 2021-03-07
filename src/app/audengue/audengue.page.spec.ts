import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudenguePage } from './audengue.page';

describe('AudenguePage', () => {
  let component: AudenguePage;
  let fixture: ComponentFixture<AudenguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudenguePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudenguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
