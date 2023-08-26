import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }

  guardar() {
    if (this.formularioRegistro.valid) {
      // Aquí puedes agregar la lógica para guardar el registro
      console.log('Formulario válido, se puede guardar');
    } else {
      console.log('Formulario inválido, no se puede guardar');
    }
  }

  ngOnInit() {}

}
