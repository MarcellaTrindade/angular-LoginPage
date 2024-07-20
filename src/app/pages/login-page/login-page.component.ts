import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

interface SignupForm {
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent{
    signupForm!: FormGroup<SignupForm>;
    loginForm!: FormGroup<LoginForm>;

 constructor( private router: Router, private loginService: LoginService, private toastrService: ToastrService){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })

    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
 }


  showFormu: boolean = true;
  showFormu2: boolean = false;

  showBtn1: boolean = true;
  showBtn2: boolean = false;

  cStyle: Record<string, string> = {};
  cStyle2: Record<string, string> = {};

   showBtn(){
   this.showBtn1 = !this.showBtn1;
   this.showBtn2 = !this.showBtn2;
}

  showForm(){
    this.showFormu = !this.showFormu;
    this.showFormu2 = !this.showFormu2;
  }

  changeStyle(){
    this.cStyle = {
      'transform': 'translateX(-100%)',
      'border-radius': '25px 100px 100px 25px',
      'transition': 'all 0.6s ease-in-out',
    }
    this.cStyle2 = {
      'transform': 'translateX(110%)',

    }
  }

  changeStyle2(){
    this.cStyle = {
      'transform': 'translateX(0)',
      'border-radius': '100px 25px 25px 100px',
      'transition': 'all 0.6s ease-in-out',
    }
  }
  submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastrService.success("Login feito com sucesso!"),
      error: () => this.toastrService.error("Erro inesperado! Tente novamente mais tarde")
    })
  }

  signup(){
    this.loginService.signup(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password).subscribe({
      next: () => this.toastrService.success("Login feito com sucesso!"),
      error: () => this.toastrService.error("Erro inesperado! Tente novamente mais tarde")
    })
  }
}
