import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutionearPage } from './solutionear.page';

describe('SolutionearPage', () => {
  let component: SolutionearPage;
  let fixture: ComponentFixture<SolutionearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
