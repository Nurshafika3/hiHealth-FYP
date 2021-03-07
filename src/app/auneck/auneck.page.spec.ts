import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuneckPage } from './auneck.page';

describe('AuneckPage', () => {
  let component: AuneckPage;
  let fixture: ComponentFixture<AuneckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuneckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuneckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
