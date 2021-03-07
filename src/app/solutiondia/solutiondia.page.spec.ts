import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutiondiaPage } from './solutiondia.page';

describe('SolutiondiaPage', () => {
  let component: SolutiondiaPage;
  let fixture: ComponentFixture<SolutiondiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutiondiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutiondiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
