import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerServicioPage } from './ver-servicio.page';

describe('VerServicioPage', () => {
  let component: VerServicioPage;
  let fixture: ComponentFixture<VerServicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerServicioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
