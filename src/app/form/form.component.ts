import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Search } from '../search';
import { SearchRequestService } from '../search-request.service';
import { Repository } from '../repository';
import { Users } from '../users';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  searchInfo = new Search ('');
  @Output() getName = new EventEmitter<Search>();

  searchFor(data){
    this.getName.emit(data.value.find);
    console.log(data.value.find)
    data.reset();
  }

  public searchMe = '';
  public githubUser: string;

  users: Users;
  repository:Repository;
  public searchRepo:string;

  findUser(Username){
    this.githubUser = '';
    this.searchMe = Username;
    this.ngOnInit();
  }

  constructor(public githubUserRequest: SearchRequestService, public userRepos: SearchRequestService) { }

  ngOnInit(){
    this.githubUserRequest.githubUser(this.searchMe);
    this.users = this.githubUserRequest.users;
    this.userRepos.gitUserRepos(this.searchMe);
    console.log(this.userRepos);
  }

  searchRepos(){
    this.searchRepo = '';
  }

}
