import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TastePage } from './taste.page';

describe('TastePage', () => {
  let component: TastePage;
  let fixture: ComponentFixture<TastePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TastePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
