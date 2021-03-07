import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptommalaPage } from './symptommala.page';

describe('SymptommalaPage', () => {
  let component: SymptommalaPage;
  let fixture: ComponentFixture<SymptommalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptommalaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptommalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
