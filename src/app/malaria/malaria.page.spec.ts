import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MalariaPage } from './malaria.page';

describe('MalariaPage', () => {
  let component: MalariaPage;
  let fixture: ComponentFixture<MalariaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalariaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MalariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
