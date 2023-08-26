import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formularioLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formularioLogin = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
    });
  }

  iniciarSesion() {
    if (this.formularioLogin.valid) {
      const correo = this.formularioLogin.value.correo;
      const contrasena = this.formularioLogin.value.contrasena;

      console.log('Intento de inicio de sesión:');
      console.log('Correo:', correo);
      console.log('Contraseña:', contrasena);
    }
  }
}
