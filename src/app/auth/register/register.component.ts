import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  error: string = '';
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{11}$'),
    ]),
    height: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(3),
    ]),
    weight: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService
      .registerUser(
        this.registerForm.value.email,
        this.registerForm.value.height,
        this.registerForm.value.weight,
        this.registerForm.value.password
      )
      .subscribe((resData: any) => {
        if (resData.error) {
          this.error = resData.error;
        }
      });

    this.registerForm.reset();
  }

  ngOnInit(): void {}
}
