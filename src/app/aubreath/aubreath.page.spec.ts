import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AubreathPage } from './aubreath.page';

describe('AubreathPage', () => {
  let component: AubreathPage;
  let fixture: ComponentFixture<AubreathPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AubreathPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AubreathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
