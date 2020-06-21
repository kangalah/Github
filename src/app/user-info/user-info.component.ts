import { Component, OnInit } from '@angular/core';
import { SearchRequestService } from '../search-request.service';
import { Repository } from '../repository';
import { Users } from '../users';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  providers: [SearchRequestService],
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public searchme = 'kangalah';
  public githubUser: string;

  users: Users;
  repository: Repository;

  findUser(username) {
    this.githubUser = '';
    this.searchme = username;
    this.ngOnInit();
  }

  constructor(public githubUserRequest: SearchRequestService, public userRepos: SearchRequestService) { }

  ngOnInit() {
    this.githubUserRequest.githubUser(this.searchme);
    this.users = this.githubUserRequest.users;
    this.userRepos.gitUserRepos(this.searchme);
    console.log(this.userRepos);
  }

}
