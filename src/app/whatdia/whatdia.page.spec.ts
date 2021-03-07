import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatdiaPage } from './whatdia.page';

describe('WhatdiaPage', () => {
  let component: WhatdiaPage;
  let fixture: ComponentFixture<WhatdiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatdiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatdiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
