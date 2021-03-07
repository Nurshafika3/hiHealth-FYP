import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutionhemoPage } from './solutionhemo.page';

describe('SolutionhemoPage', () => {
  let component: SolutionhemoPage;
  let fixture: ComponentFixture<SolutionhemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionhemoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionhemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
