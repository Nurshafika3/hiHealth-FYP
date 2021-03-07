import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuaddisonPage } from './auaddison.page';

describe('AuaddisonPage', () => {
  let component: AuaddisonPage;
  let fixture: ComponentFixture<AuaddisonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuaddisonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuaddisonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
