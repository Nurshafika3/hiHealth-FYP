import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuhyperPage } from './auhyper.page';

describe('AuhyperPage', () => {
  let component: AuhyperPage;
  let fixture: ComponentFixture<AuhyperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuhyperPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuhyperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
