import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElbowPage } from './elbow.page';

describe('ElbowPage', () => {
  let component: ElbowPage;
  let fixture: ComponentFixture<ElbowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElbowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElbowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
