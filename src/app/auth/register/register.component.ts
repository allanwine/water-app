import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error: string = '';
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{11}$')
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
    confirmPassword: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ])
  });

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.registerUser(this.registerForm.value.email, this.registerForm.value.password).subscribe(
      (resData: any) => {
        if (resData.error) {
          this.error = resData.error;
        }
      },
    );

    this.registerForm.reset();
  }

  ngOnInit(): void {
  }

}
