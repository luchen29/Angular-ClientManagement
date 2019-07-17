import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
  animations: [
    trigger('scrollAnimation', [
      state('big', style({
        width: '115px'
      })),
      state('small', style({
        width: '75px'
      })),
      transition('big => small', animate('700ms ease-out')),
      transition('small => big', animate('300ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  state = 'big';

  @HostListener('window:scroll', ['$event'])
  scrollMe(event) {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= 10) {
      this.state = 'small';
    } else {
      this.state = 'big';
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
