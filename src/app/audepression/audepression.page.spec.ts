import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudepressionPage } from './audepression.page';

describe('AudepressionPage', () => {
  let component: AudepressionPage;
  let fixture: ComponentFixture<AudepressionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudepressionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudepressionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
