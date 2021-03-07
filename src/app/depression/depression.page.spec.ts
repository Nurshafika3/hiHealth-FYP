import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepressionPage } from './depression.page';

describe('DepressionPage', () => {
  let component: DepressionPage;
  let fixture: ComponentFixture<DepressionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepressionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepressionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
