import { Component, OnInit, ViewChild, ElementRef, Renderer, HostListener } from '@angular/core';
import {Platform} from '@ionic/angular';


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.page.html',
  styleUrls: ['./canvas.page.scss'],
})
export class CanvasPage implements OnInit {

 @ViewChild('canvas') canvas: any;
   x= 0;
	y= 0;
   z= 0;
	id:any;
	flag: Boolean = true;
  constructor(public platform: Platform, public renderer: Renderer) { }

  ngOnInit() {
	var canvasElement = this.canvas.nativeElement;
	console.log(this.platform.width());
	this.renderer.setElementAttribute(canvasElement,'width' ,""+this.platform.width());
	this.renderer.setElementAttribute(canvasElement,'height' ,""+this.platform.height());
	var context = canvasElement.getContext('2d');
	window.addEventListener("devicemotion",handleMotionEvent,true);
	function handleMotionEvent(event){
		this.x= 8*event.accelerationIncludingGravity.x;
		this.y= 8*event.accelerationIncludingGravity.y;
		this.z= 8*event.accelerationIncludingGravity.z;
		context.clearRect(0,0,canvasElement.width, canvasElement.height);
	   draw(this.x,this.y,this.z);		

   }


function draw(x,y,z)
   {
   
	var color1= getRandomColor();
	var color2 = getRandomColor();
   var flag = true;
   for(var i=0; i<465; i = i+15)
   {
   
   if (flag) {
	   context.strokeStyle = ""+color1;
	   flag = false;
   }
   else
   {
	   context.strokeStyle = ""+color2;
	   flag = true;
   }
   context.beginPath();
   context.moveTo(canvasElement.width,0-i);
   context.quadraticCurveTo(800-i-x-y-z, canvasElement.height/2-i-x-y-z, canvasElement.width, canvasElement.height+i-400);
   context.stroke();
   }

   var flag = true;
   for(var i=0; i<465; i = i+15)
   {
   
   if (flag) {
	   context.strokeStyle = ""+color1;
	   flag = false;
   }
   else
   {
	context.strokeStyle = ""+color2;
	   flag = true;
   }
   context.beginPath();
   context.moveTo(0, canvasElement.height/2+375-i);
   context.quadraticCurveTo(canvasElement.width/2+i-x-y-z, 3*canvasElement.height/2-185-i-x-y-z, canvasElement.width/2-i, canvasElement.height);
   context.stroke();
   }


   var flag = true;
   for(var i=0; i<465; i = i+15)
   {
   
   if (flag) {
	  context.strokeStyle = ""+color1;
	   flag = false;
   }
   else
   {
	  context.strokeStyle = ""+color2;
	   flag = true;
   }
  context.beginPath();
  context.moveTo(500-i, 0);
   context.quadraticCurveTo(300+i-x-y-z, 300-i-x-y-z, 0-i,canvasElement.height/2+500-i);
  context.stroke();
   }


   
   var flag = true;
   for(var i=0; i<345; i = i+15)
   {
   
   if (flag) {
	  context.strokeStyle = ""+color1;
	   flag = false;
   }
   else
   {
	   context.strokeStyle = ""+color2;
	   flag = true;
   }
  context.beginPath();
   context.moveTo(canvasElement.width/2-390+i, 0);
   context.quadraticCurveTo(canvasElement.width/2+i-x-y-z, 3*canvasElement.height/2-115-i-x-y-z, canvasElement.width+400-i,canvasElement.height/2-150-i);
   context.stroke();
   }


   var flag = true;
   for(var i=0; i<345; i = i+15)
   {
   
   if (flag) {
	   context.strokeStyle = ""+color1;
	   flag = false;
   }
   else
   {
	   context.strokeStyle = ""+color2;
	   flag = true;
   }
  context.beginPath();
   context.moveTo(canvasElement.width-100-i, 0);
   context.quadraticCurveTo(canvasElement.width-i-x-y-z, canvasElement.height/2-i-x-y-z, canvasElement.width/2-350, canvasElement.height+500-i);
   context.stroke();
   }


   var flag = true;
   for(var i=0; i<345; i = i+15)
   {
   
   if (flag) {
	   context.strokeStyle = ""+color1;
	   flag = false;
   }
   else
   {
	  context.strokeStyle = ""+color2;
	   flag = true;
   }
  context.beginPath();
   context.moveTo(canvasElement.width+i, canvasElement.height+400-i);
   context.quadraticCurveTo(canvasElement.width-i-x-y-z, canvasElement.height/2-i-x-y-z, canvasElement.width/2-500, canvasElement.height+500-i);
   context.stroke();
   }


   var flag = true;
   for(var i=0; i<345; i = i+15)
   {
   
   if (flag) {
	   context.strokeStyle = ""+color1;
	   flag = false;
   }
   else
   {
	   context.strokeStyle = ""+color2;
	   flag = true;
   }
   context.beginPath();
   context.moveTo(canvasElement.width/2-200+i, canvasElement.height);
   context.quadraticCurveTo(canvasElement.width/2-200+i-x-y-z, 400-i-x-y-z, 0, canvasElement.height/2+30-i);
   context.stroke();
   }


   var flag = true;
   for(var i=0; i<345; i = i+15)
   {
   
   if (flag) {
	  context.strokeStyle = ""+color1;
	   flag = false;
   }
   else
   {
	   context.strokeStyle = ""+color2;
	   flag = true;
   }
   context.beginPath();
   context.moveTo(canvasElement.width/2+300-i, 0);
   context.quadraticCurveTo(600-i-x-y-z, 600-i-x-y-z, 0, canvasElement.height/2-i);
   context.stroke();
   }


   var flag = true;
   for(var i=0; i<345; i = i+15)
   {
   
   if (flag) {
	   context.strokeStyle = ""+color1;
	   flag = false;
   }
   else
   {
	  context.strokeStyle = ""+color2;
	   flag = true;
   }
   context.beginPath();
   context.moveTo(canvasElement.width/2+i, 0);
   context.quadraticCurveTo(800+i-x-y-z, 500-i-x-y-z, canvasElement.width, canvasElement.height/2-i);
   context.stroke();
   }

   var flag = true;
   for(var i=0; i<345; i = i+15)
   {
   
   if (flag) {
	   context.strokeStyle = ""+color1;
	   flag = false;
   }
   else
   {
	   context.strokeStyle = ""+color2;
	   flag = true;
   }
   context.beginPath();
   context.moveTo(0, 0+i);
   context.quadraticCurveTo(-200+i-x-y-z, -200+i-x-y-z, 100+i, 0);
   context.stroke();
   }
  


}



function getRandomColor() {
 var r = Math.floor(Math.random() * 256);
 var g = Math.floor(Math.random() * 256);
 var b = Math.floor(Math.random() * 256);


var hexR = r.toString(16);
var hexG = g.toString(16);
var hexB = b.toString(16);

 if (hexR.length == 1) {
   hexR = "0" + hexR;
 }

 if (hexG.length == 1) {
   hexG = "0" + hexG;
 }

 if (hexB.length == 1) {
   hexB = "0" + hexB;
 }


 var hexColor = "#" + hexR + hexG + hexB;
  
 return hexColor.toUpperCase();
}
  }


   
  
}
