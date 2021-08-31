import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userName: string;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('bank');
  }
}