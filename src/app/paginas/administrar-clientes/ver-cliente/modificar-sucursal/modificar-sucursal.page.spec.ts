import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificarSucursalPage } from './modificar-sucursal.page';

describe('ModificarSucursalPage', () => {
  let component: ModificarSucursalPage;
  let fixture: ComponentFixture<ModificarSucursalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarSucursalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarSucursalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
