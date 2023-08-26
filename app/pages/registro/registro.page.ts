import { Component, OnInit } from '@angular/core';
import { 
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  //Formulario de Registro//
  constructor(public fb: FormBuilder) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    })
  }

  //Verificador del Formulario//
  guardar() {
    if (this.formularioRegistro.valid) {
      // Aquí puedes agregar la lógica para guardar el registro
      console.log('Formulario válido, se puede guardar');
    } else {
      console.log('Formulario inválido, no se puede guardar');
    }
  }

  ngOnInit() {

  }

}
