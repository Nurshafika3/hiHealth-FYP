import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatdenguePage } from './whatdengue.page';

describe('WhatdenguePage', () => {
  let component: WhatdenguePage;
  let fixture: ComponentFixture<WhatdenguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatdenguePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatdenguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
