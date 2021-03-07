import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutionmalaPage } from './solutionmala.page';

describe('SolutionmalaPage', () => {
  let component: SolutionmalaPage;
  let fixture: ComponentFixture<SolutionmalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionmalaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionmalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
