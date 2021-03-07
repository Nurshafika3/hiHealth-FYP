import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutionocdPage } from './solutionocd.page';

describe('SolutionocdPage', () => {
  let component: SolutionocdPage;
  let fixture: ComponentFixture<SolutionocdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionocdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionocdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
