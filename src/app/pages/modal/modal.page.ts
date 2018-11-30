import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  passedId:string;
  greeting="";
  constructor(private navParams: NavParams) { }

  ngOnInit() {
    this.passedId = this.navParams.get("nameValue");
    if(this.passedId == "")
    {
        this.greeting=" Welcome to the Modal";
    }
    else
    {
      this.greeting="Hello ";
    }
  }

}
