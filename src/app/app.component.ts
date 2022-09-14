import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  emailRejected:String = "Introduzca un email valido";
  valRejected:String = "Validación anti-spam incorrecta";
  valMsg:any;
  emailMsg:any;
  datos:any;

  uploadData(nombre:any, email:any, mensaje:any, suma:any){
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!expression.test(email)) {
      this.emailMsg = this.emailRejected;
    }else if(suma != 5){
      this.valMsg = this.valRejected;
    }else{
      this.datos={nombre:nombre, email:email, mensaje:mensaje};
    }

  }

}
