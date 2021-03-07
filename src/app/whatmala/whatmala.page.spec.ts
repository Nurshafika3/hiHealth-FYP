import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatmalaPage } from './whatmala.page';

describe('WhatmalaPage', () => {
  let component: WhatmalaPage;
  let fixture: ComponentFixture<WhatmalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatmalaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatmalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
