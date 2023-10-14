import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticarUsuarioComponent } from './autenticar-usuario.component';

describe('AutenticarUsuarioComponent', () => {
  let component: AutenticarUsuarioComponent;
  let fixture: ComponentFixture<AutenticarUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutenticarUsuarioComponent]
    });
    fixture = TestBed.createComponent(AutenticarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
