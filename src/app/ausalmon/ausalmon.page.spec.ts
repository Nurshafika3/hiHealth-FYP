import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AusalmonPage } from './ausalmon.page';

describe('AusalmonPage', () => {
  let component: AusalmonPage;
  let fixture: ComponentFixture<AusalmonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AusalmonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AusalmonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
