import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudiaPage } from './audia.page';

describe('AudiaPage', () => {
  let component: AudiaPage;
  let fixture: ComponentFixture<AudiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
