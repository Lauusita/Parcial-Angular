import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductFormModel } from '../../interfaces/crear-producto';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],

  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {
  productForm: FormGroup<ProductFormModel>;
  submitted = false
  showModal: boolean = false;

   formModel: ProductFormModel = {
    descripcion: new FormControl(''),
    file :new FormControl(''),
    nombres: new FormControl(''),
    precio: new FormControl()
  }

  constructor() {
    this.productForm = this.buildForm(this.formModel)  
  }

  buildForm(model: ProductFormModel): FormGroup {
    return new FormGroup({
      nombres: new FormControl(model.nombres.value, Validators.required),
      descripcion: new FormControl(model.descripcion.value, Validators.required),
      precio: new FormControl(model.precio.value, Validators.required),
      file: new FormControl(model.file.value, Validators.required),
    })
  }
  
  onSubmit() {
    this.submitted = true;

    if (this.productForm.valid) {
      console.log('Formulario enviado:', this.productForm.value);

      this.showModal = true;
      
      this.productForm.reset();
      this.submitted = false;
    }
  }

  closeModal() {
    this.productForm.reset();
    // Cierra el modal
    this.showModal = false;
  }
}
