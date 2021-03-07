import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuearPage } from './auear.page';

describe('AuearPage', () => {
  let component: AuearPage;
  let fixture: ComponentFixture<AuearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
