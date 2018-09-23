import { Component, OnInit } from '@angular/core';
import 'jquery';

declare var $: any;
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      var table =$('#example').DataTable({
        searching: false,
        lengthChange: false
      });

      table.page.len( 5 ).draw();

      var table1 =$('#example1').DataTable({
        searching: false,
        lengthChange: false
      });

      table1.page.len( 5 ).draw();

      var table2 =$('#example2').DataTable({
        searching: false,
        lengthChange: false
      });

      table2.page.len( 5 ).draw();
    });
  }

}
