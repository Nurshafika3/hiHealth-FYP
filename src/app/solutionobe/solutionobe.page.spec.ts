import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutionobePage } from './solutionobe.page';

describe('SolutionobePage', () => {
  let component: SolutionobePage;
  let fixture: ComponentFixture<SolutionobePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionobePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionobePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
