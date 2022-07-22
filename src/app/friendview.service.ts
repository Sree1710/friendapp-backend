import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendviewService {

  constructor(private http:HttpClient) { }
  Addfriend(friend:any){
    return this.http.post<any>("https://dummyapifriends.herokuapp.com/add",friend);
  }
  viewFriend=()=>
  {
    return this.http.get("https://dummyapifriends.herokuapp.com/view");
  }
}
