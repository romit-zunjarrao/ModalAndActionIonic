import { Component, ElementRef } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ModalPage } from '../pages/modal/modal.page';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data="";
  constructor(private modalController: ModalController, private router: Router, private actionSheetController : ActionSheetController){}
  
 async openModal()
  {
    const modal = await this.modalController.create(
      {
        component:ModalPage,
        componentProps: {nameValue: this.data}
       
      }
    );
    modal.present();
  }

  
  go()
  {
      this.router.navigateByUrl('/canvas');
  }

  @ViewChild('card') myDiv: ElementRef;

    ngAfterViewInit() {
        console.log(this.myDiv.nativeElement);
    }
  

    async swipeEvent(){
     
     const actionSheet = await  this.actionSheetController.create({
       header: 'Fight',
       buttons: [
       { text: 'Naruto VS Pain' },
         {text:'Orochimaru Vs Pain'},
         { text: 'Itachi VS Pain'},
         { text: 'kakashi VS Pain'},
         { text: 'Jiraiya VS Pain' }
       ]
     });
     actionSheet.present();
     console.log("Swipe")
   }
}
