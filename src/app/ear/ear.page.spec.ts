import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EarPage } from './ear.page';

describe('EarPage', () => {
  let component: EarPage;
  let fixture: ComponentFixture<EarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
