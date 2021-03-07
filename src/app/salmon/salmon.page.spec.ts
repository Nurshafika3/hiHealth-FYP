import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalmonPage } from './salmon.page';

describe('SalmonPage', () => {
  let component: SalmonPage;
  let fixture: ComponentFixture<SalmonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalmonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalmonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
