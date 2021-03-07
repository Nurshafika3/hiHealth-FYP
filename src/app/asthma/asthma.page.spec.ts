import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsthmaPage } from './asthma.page';

describe('AsthmaPage', () => {
  let component: AsthmaPage;
  let fixture: ComponentFixture<AsthmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsthmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsthmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
