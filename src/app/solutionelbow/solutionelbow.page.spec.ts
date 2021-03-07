import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutionelbowPage } from './solutionelbow.page';

describe('SolutionelbowPage', () => {
  let component: SolutionelbowPage;
  let fixture: ComponentFixture<SolutionelbowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionelbowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionelbowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
