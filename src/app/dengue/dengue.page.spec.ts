import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DenguePage } from './dengue.page';

describe('DenguePage', () => {
  let component: DenguePage;
  let fixture: ComponentFixture<DenguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenguePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DenguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
