import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutionaddisonPage } from './solutionaddison.page';

describe('SolutionaddisonPage', () => {
  let component: SolutionaddisonPage;
  let fixture: ComponentFixture<SolutionaddisonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionaddisonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionaddisonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
