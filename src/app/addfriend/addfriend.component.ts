import { Component, OnInit } from '@angular/core';
import { FriendviewService } from '../friendview.service';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent implements OnInit {
  friend={
    name:"",
    friendName:"",
    friendNickName:"",
    DescribeYourFriend:""

  }
  constructor(private friendservice:FriendviewService) { }

  ngOnInit(): void {
  }
  Addfriend(){
    this.friendservice.Addfriend(this.friend).subscribe((data)=>{
      alert("Success");
    })
  }
}
