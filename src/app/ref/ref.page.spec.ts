import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RefPage } from './ref.page';

describe('RefPage', () => {
  let component: RefPage;
  let fixture: ComponentFixture<RefPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
