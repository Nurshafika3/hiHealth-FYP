import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhattastePage } from './whattaste.page';

describe('WhattastePage', () => {
  let component: WhattastePage;
  let fixture: ComponentFixture<WhattastePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhattastePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhattastePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
