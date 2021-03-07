import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhateyesPage } from './whateyes.page';

describe('WhateyesPage', () => {
  let component: WhateyesPage;
  let fixture: ComponentFixture<WhateyesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhateyesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhateyesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
