import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.styl']
})
export class DemoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  showPopup() {
    window.open('http://localhost:3000/app/your-company/5c81a91c4d02104a40a46ea7/', 'name', 'width=800,height=550,location=no,menubar=no');
  }
}
