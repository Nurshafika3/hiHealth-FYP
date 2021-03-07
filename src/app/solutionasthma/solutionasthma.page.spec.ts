import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutionasthmaPage } from './solutionasthma.page';

describe('SolutionasthmaPage', () => {
  let component: SolutionasthmaPage;
  let fixture: ComponentFixture<SolutionasthmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionasthmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionasthmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
