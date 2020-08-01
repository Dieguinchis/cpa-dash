import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AltaSucursalPage } from './alta-sucursal.page';

describe('AltaSucursalPage', () => {
  let component: AltaSucursalPage;
  let fixture: ComponentFixture<AltaSucursalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaSucursalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AltaSucursalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
