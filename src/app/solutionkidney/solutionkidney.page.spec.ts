import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutionkidneyPage } from './solutionkidney.page';

describe('SolutionkidneyPage', () => {
  let component: SolutionkidneyPage;
  let fixture: ComponentFixture<SolutionkidneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionkidneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionkidneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
