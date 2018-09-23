import { Component, OnInit } from '@angular/core';
import 'jquery';

declare var $: any;

@Component({
  selector: 'app-book-master',
  templateUrl: './book-master.component.html',
  styleUrls: ['./book-master.component.css']
})

export class BookMasterComponent implements OnInit {

  dynaminForm: any;

  public fields: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      required: true,
    },
    {
      type: 'password',
      name: 'password',
      label: 'Password',
      value: '',
      required: true,
    },
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' }
      ]
    },
    {
      type: 'radio',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'm', label: 'Male' },
        { key: 'f', label: 'Female' }
      ]
    },
    {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      required: true,
      options: [
        { key: 'f', label: 'Fishing' },
        { key: 'c', label: 'Cooking' }
      ]
    }
  ];

  constructor() {

  }

  ngOnInit() {
    $(document).ready(function () {
      $('#example').DataTable({
        lengthChange: false
      });
      $('.fixed-action-btn').floatingActionButton({
        hoverEnabled: false
      });
      $('.modal').modal();
      $('.tooltipped').tooltip();
    });
  }

}
