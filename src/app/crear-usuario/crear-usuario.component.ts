import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {
  userForm: FormGroup
  submitted = false
  showModal: boolean = false;

  constructor(
    private readonly dialog: MatDialog
  ) {
    this.userForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      precio: new FormControl( [
        Validators.required
      ]),
      file: new FormControl("")
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.valid) {
      console.log('Formulario enviado:', this.userForm.value);

      this.showModal = true;
      
      this.userForm.reset();
      this.submitted = false;
    }
  }

  closeModal() {
    // Cierra el modal
    this.showModal = false;
  }
}
