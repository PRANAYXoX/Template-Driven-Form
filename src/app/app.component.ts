import { Component } from '@angular/core';
import { NgModel, NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'temp_driven_form';
  name: String = '';
  pass: String = '';
  cPass: String = '';
  addr: String = '';
  onSubmit = (f: NgForm) => {
    console.log('FORM OUTPUT:', f?.value);
  };
  getVal = (f: any) => {
    console.log('VAL::', f.name);
    switch (f.name) {
      case 'name':
        console.log('NAME SELECTED');
        break;
      case 'pass':
        console.log('Password selected');
        break;
      case 'c-pass':
        console.log('C-Password selected');
        break;
      case 'addr':
        console.log('Address selected');
    }
  };
}
