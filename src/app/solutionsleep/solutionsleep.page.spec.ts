import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutionsleepPage } from './solutionsleep.page';

describe('SolutionsleepPage', () => {
  let component: SolutionsleepPage;
  let fixture: ComponentFixture<SolutionsleepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsleepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionsleepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
