import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatocdPage } from './whatocd.page';

describe('WhatocdPage', () => {
  let component: WhatocdPage;
  let fixture: ComponentFixture<WhatocdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatocdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatocdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
