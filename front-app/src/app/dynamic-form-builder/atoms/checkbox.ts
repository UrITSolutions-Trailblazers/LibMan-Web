import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'checkbox',
    template: `
      <div [formGroup]="form">
        <div [formGroupName]="field.name" >
          <div *ngFor="let opt of field.options">
          <label>
             <input [formControlName]="opt.key" type="checkbox" id="inlineCheckbox1" value="option1" />
             <span>{{opt.label}}</span></label>
          </div>
        </div>

      </div> 
    `
})
export class CheckBoxComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }
}