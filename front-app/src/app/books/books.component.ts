import { Component, OnInit } from '@angular/core';
import 'jquery';

declare var $: any;

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('#example').DataTable({
        lengthChange: false
      });
    });
  }

}
