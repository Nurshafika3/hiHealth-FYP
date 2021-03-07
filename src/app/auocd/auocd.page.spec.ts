import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuocdPage } from './auocd.page';

describe('AuocdPage', () => {
  let component: AuocdPage;
  let fixture: ComponentFixture<AuocdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuocdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuocdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
