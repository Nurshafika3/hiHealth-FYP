import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatneckPage } from './whatneck.page';

describe('WhatneckPage', () => {
  let component: WhatneckPage;
  let fixture: ComponentFixture<WhatneckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatneckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatneckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
