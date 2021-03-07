import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutiondenguePage } from './solutiondengue.page';

describe('SolutiondenguePage', () => {
  let component: SolutiondenguePage;
  let fixture: ComponentFixture<SolutiondenguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutiondenguePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutiondenguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
