import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhataddisonPage } from './whataddison.page';

describe('WhataddisonPage', () => {
  let component: WhataddisonPage;
  let fixture: ComponentFixture<WhataddisonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhataddisonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhataddisonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
