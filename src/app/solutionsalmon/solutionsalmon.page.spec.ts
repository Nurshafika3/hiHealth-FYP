import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutionsalmonPage } from './solutionsalmon.page';

describe('SolutionsalmonPage', () => {
  let component: SolutionsalmonPage;
  let fixture: ComponentFixture<SolutionsalmonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsalmonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionsalmonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
