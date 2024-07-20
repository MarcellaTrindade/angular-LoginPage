import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent{

 constructor(){
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
}
