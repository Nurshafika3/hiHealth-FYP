import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HyperPage } from './hyper.page';

describe('HyperPage', () => {
  let component: HyperPage;
  let fixture: ComponentFixture<HyperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyperPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HyperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
