import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatdepressionPage } from './whatdepression.page';

describe('WhatdepressionPage', () => {
  let component: WhatdepressionPage;
  let fixture: ComponentFixture<WhatdepressionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatdepressionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatdepressionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
