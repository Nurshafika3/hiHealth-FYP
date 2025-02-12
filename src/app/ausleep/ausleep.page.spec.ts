import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AusleepPage } from './ausleep.page';

describe('AusleepPage', () => {
  let component: AusleepPage;
  let fixture: ComponentFixture<AusleepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AusleepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AusleepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
