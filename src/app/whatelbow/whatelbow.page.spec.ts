import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatelbowPage } from './whatelbow.page';

describe('WhatelbowPage', () => {
  let component: WhatelbowPage;
  let fixture: ComponentFixture<WhatelbowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatelbowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatelbowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
