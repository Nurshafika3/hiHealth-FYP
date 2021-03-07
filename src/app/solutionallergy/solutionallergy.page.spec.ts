import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutionallergyPage } from './solutionallergy.page';

describe('SolutionallergyPage', () => {
  let component: SolutionallergyPage;
  let fixture: ComponentFixture<SolutionallergyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionallergyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionallergyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
