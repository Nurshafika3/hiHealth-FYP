import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuelbowPage } from './auelbow.page';

describe('AuelbowPage', () => {
  let component: AuelbowPage;
  let fixture: ComponentFixture<AuelbowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuelbowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuelbowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
