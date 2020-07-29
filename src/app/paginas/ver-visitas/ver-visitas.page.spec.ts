import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerVisitasPage } from './ver-visitas.page';

describe('VerVisitasPage', () => {
  let component: VerVisitasPage;
  let fixture: ComponentFixture<VerVisitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerVisitasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerVisitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
