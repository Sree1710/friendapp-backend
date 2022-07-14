import { Component, OnInit } from '@angular/core';
import { FriendviewService } from '../friendview.service';

@Component({
  selector: 'app-viewfriend',
  templateUrl: './viewfriend.component.html',
  styleUrls: ['./viewfriend.component.css']
})
export class ViewfriendComponent implements OnInit {

  constructor(private api:FriendviewService) 
  {
   api.viewFriend().subscribe(
    (response)=>{
      this.data=response
    }
   )
  }

  ngOnInit(): void {
  }
data:any=[]
}
