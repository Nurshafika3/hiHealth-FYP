import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatobePage } from './whatobe.page';

describe('WhatobePage', () => {
  let component: WhatobePage;
  let fixture: ComponentFixture<WhatobePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatobePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatobePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
