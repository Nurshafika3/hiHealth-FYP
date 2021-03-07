import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AueyesPage } from './aueyes.page';

describe('AueyesPage', () => {
  let component: AueyesPage;
  let fixture: ComponentFixture<AueyesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AueyesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AueyesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
