import { Component } from '@angular/core';

import * as $ from 'jquery';
import {Form} from './Form';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Life-Type';
  hash  : string ;

	form : any;

	constructor() {
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
  

  
	}
	
	submitTriggerd (){
		console.log(this.form);
	}

  
  

  
}
