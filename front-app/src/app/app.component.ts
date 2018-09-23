import { Component , OnInit} from '@angular/core';
import 'jquery';

declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    $(document).ready(function(){
      $('.sidenav').sidenav();
      $(".dropdown-trigger").dropdown({hover: true, constrainWidth: false, coverTrigger: false});
      $(".dropdown-trigger-side-nav").dropdown();
    });
  }

}