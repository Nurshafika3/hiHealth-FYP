import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhathyperPage } from './whathyper.page';

describe('WhathyperPage', () => {
  let component: WhathyperPage;
  let fixture: ComponentFixture<WhathyperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhathyperPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhathyperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
