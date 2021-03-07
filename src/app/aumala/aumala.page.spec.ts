import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AumalaPage } from './aumala.page';

describe('AumalaPage', () => {
  let component: AumalaPage;
  let fixture: ComponentFixture<AumalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AumalaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AumalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
