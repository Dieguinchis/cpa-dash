import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerSucursalPage } from './ver-sucursal.page';

describe('VerSucursalPage', () => {
  let component: VerSucursalPage;
  let fixture: ComponentFixture<VerSucursalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerSucursalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerSucursalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
