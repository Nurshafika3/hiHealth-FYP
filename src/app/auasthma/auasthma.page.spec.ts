import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuasthmaPage } from './auasthma.page';

describe('AuasthmaPage', () => {
  let component: AuasthmaPage;
  let fixture: ComponentFixture<AuasthmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuasthmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuasthmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
