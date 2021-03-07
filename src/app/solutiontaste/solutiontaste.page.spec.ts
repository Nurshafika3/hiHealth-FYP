import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutiontastePage } from './solutiontaste.page';

describe('SolutiontastePage', () => {
  let component: SolutiontastePage;
  let fixture: ComponentFixture<SolutiontastePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutiontastePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutiontastePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
