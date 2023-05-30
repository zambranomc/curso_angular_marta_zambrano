import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-user-form-validation',
  templateUrl: './user-form-validation.component.html',
  styleUrls: ['./user-form-validation.component.css']
})
export class UserFormValidationComponent {
  userForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, this.notWhiteSpacesValidator]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nickName: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    salary: new FormControl(null, [Validators.required, Validators.min(16500), Validators.max(30000)]),
    nif: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{8}[A-Z]$')]),
    phone: new FormControl('', [Validators.pattern('^[679]{1}[0-9]{8}$')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9$%&/()]{8,10}$')] ),
    passwordConfirm: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9$%&/()]{8,10}$')])

  }, {validators: this.passwordConfirmValidator});
 

  //Validator personalizado
  passwordConfirmValidator(control: AbstractControl){
    if(control.get('password')?.value === control.get('passwordConfirm')?.value)
      return null;// si son iguales no hay error
    else
      return {'confirmError':true};// si son distintas  si hay error

  }

  //Validador personalizado a nivel de FormControl: si hay espacios mostrará error
  notWhiteSpacesValidator(control: AbstractControl){
    let containSpaces =(control.value || '').includes('');
    if(containSpaces)
      return{'isWhiteSpace': true};// Si contiene espacios si hay un error
    else
      return null;// Si no contiene espacios está bien

  }



  save(): void {
    if(this.userForm.valid){
      console.log("Formulario correcto");
    }else{
      console.log("Formulario incorrecto, tiene errores de validación");
    }
    console.log(this.userForm.get('fullName'));
  }

  


}
