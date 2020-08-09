import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AltaWorkstationPage } from './alta-workstation.page';

describe('AltaWorkstationPage', () => {
  let component: AltaWorkstationPage;
  let fixture: ComponentFixture<AltaWorkstationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaWorkstationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AltaWorkstationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
