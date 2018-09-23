import { Component, OnInit } from '@angular/core';
import 'jquery';

declare var $: any;

@Component({
  selector: 'app-reader-master',
  templateUrl: './reader-master.component.html',
  styleUrls: ['./reader-master.component.css']
})
export class ReaderMasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('#example').DataTable({
        lengthChange: false
      });
    });
  }

}
