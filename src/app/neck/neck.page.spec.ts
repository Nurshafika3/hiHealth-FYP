import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NeckPage } from './neck.page';

describe('NeckPage', () => {
  let component: NeckPage;
  let fixture: ComponentFixture<NeckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NeckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
