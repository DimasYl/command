import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StateCalendarService {

  public calendar$ = new BehaviorSubject<string>('calendar')

}
