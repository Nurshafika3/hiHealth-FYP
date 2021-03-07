import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutionhyperPage } from './solutionhyper.page';

describe('SolutionhyperPage', () => {
  let component: SolutionhyperPage;
  let fixture: ComponentFixture<SolutionhyperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionhyperPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionhyperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
