import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuhemoPage } from './auhemo.page';

describe('AuhemoPage', () => {
  let component: AuhemoPage;
  let fixture: ComponentFixture<AuhemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuhemoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuhemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
