import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StateCalendarService} from "./state/state-calendar.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  public form: FormGroup = new FormGroup({
    date: new FormControl('')
  })

  public edit: boolean = true

  viewForm() {
    this.edit = !this.edit
  }

  constructor(public state: StateCalendarService) {
  }
}
