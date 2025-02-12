import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatasthmaPage } from './whatasthma.page';

describe('WhatasthmaPage', () => {
  let component: WhatasthmaPage;
  let fixture: ComponentFixture<WhatasthmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatasthmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatasthmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
