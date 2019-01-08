import { Component } from '@angular/core';
import * as $ from 'jquery';
import {Form} from './Form';
import {MailServiceService} from '../app/mail-service.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Life-Type';
  hash  : string ;
inputs = document.querySelectorAll('.file-input')

	form : Form;

	constructor(private mailService: MailServiceService) {
		this.form = new Form("","","","");
	}


  ngOnInit(){  

    
///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
  });
///////////////////////////
	// Btn nav collapse
	$('#nav .nav-collapse').on('click', function() {
		$('#nav').toggleClass('open');
  });
  
  $('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
  });
///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});

  // On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});
	
	document.getElementById("Email").style.borderColor = "red";
	document.getElementById("firstName").style.borderColor = "red";
	

	}
	
	submitTriggerd (){


		this.mailService.sendMail(this.form);
		if(this.form.name == ""){
			alert("Name must be filled out");
			document.getElementById("firstName").style.borderColor = "red";
		}
		if(this.form.Email == ""){
			alert("אימייל הוא שדה חובה");
			document.getElementById("Email").style.borderColor = "red";
		}
	}
	nameCheck(){

		if(this.form.name == ""){
			return;
		}
	 
		var re = /^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/;
		var re2 = /^[אבגדהוזחטיכלמנסעפצקרשתץףןםa-zA-Z0-9\_]+$/;


		if(!(re.test(this.form.name) ||re2.test(this.form.name) )){
			alert("שם לא חוקי");
			document.getElementById("firstName").style.borderColor = "red";
		}
		if(this.form.name.length < 2){
			// alert("Name must be at least 3  characters");

			document.getElementById("firstName").style.borderColor = "red";
			return;

		}
		document.getElementById("firstName").style.borderColor = "#6195FF";
	}
	EmailCheck(){

		
		if(this.form.Email == ""){
			return;
		}
	 
		var re = /\S+@\S+\.\S+/;		


		if(!re.test(this.form.Email)){
			// alert("Name must be at least 3  characters");

			document.getElementById("Email").style.borderColor = "red";
			return;

		}
		document.getElementById("Email").style.borderColor = "#6195FF";
	}

	triggredInput(){
		for (var i = 0, len = this.inputs.length; i < len; i++) {
			this.customInput(this.inputs[i])
		  }
	}
	 customInput (el) {
		const fileInput = el.querySelector('[type="file"]')
		const label = el.querySelector('[data-js-label]')
		
		fileInput.onchange =
		fileInput.onmouseout = function () {
		  if (!fileInput.value) return
		  
		  var value = fileInput.value.replace(/^.*[\\\/]/, '')
		  el.className += ' -chosen'
		  label.innerText = value
		}
	  }


}
