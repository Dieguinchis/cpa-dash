import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerVisitaPage } from './ver-visita.page';

describe('VerVisitaPage', () => {
  let component: VerVisitaPage;
  let fixture: ComponentFixture<VerVisitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerVisitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerVisitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
