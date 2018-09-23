import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// text,email,tel,textarea,password, 
@Component({
    selector: 'textbox',
    template: `
      <div [formGroup]="form" class="input-field">
        <input *ngIf="!field.multiline" [attr.type]="field.type" class="validate"  [id]="field.name" [name]="field.name" [formControlName]="field.name">
        <textarea *ngIf="field.multiline" [class.is-invalid]="isDirty && !isValid" [formControlName]="field.name" [id]="field.name"
        rows="9" class="validate" [placeholder]="field.placeholder"></textarea>
        <label *ngIf="field.type === 'text' || field.type === 'password'" [attr.for]="field.name">
          {{field.label}}
          <strong class="red-text" *ngIf="field.required">*</strong>
        </label>
      </div> 
    `
})
export class TextBoxComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }
  
    constructor() {

    }
}