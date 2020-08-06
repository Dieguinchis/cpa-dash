import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AltaTecnicosPage } from './alta-tecnicos.page';

describe('AltaTecnicosPage', () => {
  let component: AltaTecnicosPage;
  let fixture: ComponentFixture<AltaTecnicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaTecnicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AltaTecnicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
