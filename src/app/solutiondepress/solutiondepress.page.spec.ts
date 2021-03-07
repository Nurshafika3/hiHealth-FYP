import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutiondepressPage } from './solutiondepress.page';

describe('SolutiondepressPage', () => {
  let component: SolutiondepressPage;
  let fixture: ComponentFixture<SolutiondepressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutiondepressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutiondepressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
