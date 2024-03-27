import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicios/servicio.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent implements OnInit {

  public estudiantes: any[] = [];
  public formulario!: FormGroup

  constructor(private services: ServicioService, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.consultarDatos()
    this.crearFormulario()
  }

  consultarDatos() {
    this.services.getData().subscribe((data: any) => {
      this.estudiantes = data.estudiantes_aprobados;
    })
  }

  crearFormulario() {
    this.formulario = this.formBuilder.group({
      identificacion: [ '',[Validators.required, Validators.min(10000000)]]
    })
  }

  buscar(){
    console.log(this.formulario.value)
  }
}
