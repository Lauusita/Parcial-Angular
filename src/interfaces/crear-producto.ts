import { FormControl } from "@angular/forms";

export interface ProductFormModel {
  nombres: FormControl<string | null>;
  descripcion: FormControl<string | null>;
  precio: FormControl<number | null>;
  file: FormControl<string | null>;
}
