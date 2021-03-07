import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutionneckPage } from './solutionneck.page';

describe('SolutionneckPage', () => {
  let component: SolutionneckPage;
  let fixture: ComponentFixture<SolutionneckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionneckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionneckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
