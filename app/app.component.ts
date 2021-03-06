import { Component } from '@angular/core';
import { ServiceNameService } from './service-name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl;
  url;
  userName: string = "";
  nameError: string = "";
  constructor (private service: ServiceNameService){ } 

  ngOnInit(): void {
    this.service.functionName()
    .subscribe(
      data=>{
        console.log("In service class",data);
      }
    )
    this.title = "Hello from BridgeLabz.";
    this.imgUrl = "../assets/BL_logo_square_jpg.jpg";
    this.url = "https://www.bridgelabz.com";
  }

  onClick($event) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onInput($event) {
    console.log("Change Event Occurred!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    else {
      this.userName = "";
      this.nameError = "Name is Incorrect!";
    }
  }
}