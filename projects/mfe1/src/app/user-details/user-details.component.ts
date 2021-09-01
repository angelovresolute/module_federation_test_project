import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  username: string;
  constructor(
    private route: ActivatedRoute,
    private shared: SharedLibService,
  ) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    this.shared.someData = this.username;
    console.log(this.shared.someData);
  }
}
