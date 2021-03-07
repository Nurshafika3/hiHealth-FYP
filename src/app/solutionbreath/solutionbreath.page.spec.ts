import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutionbreathPage } from './solutionbreath.page';

describe('SolutionbreathPage', () => {
  let component: SolutionbreathPage;
  let fixture: ComponentFixture<SolutionbreathPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionbreathPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionbreathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
