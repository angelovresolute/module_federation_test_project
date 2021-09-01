import { Component, OnInit } from '@angular/core';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  constructor(
    public shared: SharedLibService,
  ) { }

  ngOnInit(): void {
    console.log(this.shared.someData);
  }
}
