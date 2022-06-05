import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public form: FormGroup = new FormGroup({
    date: new FormControl('')
  })

  public edit: boolean = true

  viewForm() {
    this.edit = !this.edit
  }
}
