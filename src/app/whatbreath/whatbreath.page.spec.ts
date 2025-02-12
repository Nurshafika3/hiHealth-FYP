import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatbreathPage } from './whatbreath.page';

describe('WhatbreathPage', () => {
  let component: WhatbreathPage;
  let fixture: ComponentFixture<WhatbreathPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatbreathPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatbreathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
