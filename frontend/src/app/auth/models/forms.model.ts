import { FormControl } from "@angular/forms"

export interface registerFormInterface {
  username: FormControl<string | null>,
  email: FormControl<string | null>,
  password: FormControl<string | null>,
  passwordConfirm: FormControl<string | null>
}
