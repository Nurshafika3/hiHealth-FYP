import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutioneyesPage } from './solutioneyes.page';

describe('SolutioneyesPage', () => {
  let component: SolutioneyesPage;
  let fixture: ComponentFixture<SolutioneyesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutioneyesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutioneyesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
