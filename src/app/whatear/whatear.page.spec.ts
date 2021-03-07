import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatearPage } from './whatear.page';

describe('WhatearPage', () => {
  let component: WhatearPage;
  let fixture: ComponentFixture<WhatearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
