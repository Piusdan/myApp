import { Component } from '@angular/core';
import {PostService} from '../services/post.service'

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostService]
})
export class UserComponent  { 
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];
  constructor(private postService: PostService){
    this.name = 'Pius';
    this.email = "pdan@africastalking.com",
    this.address = {
        street: 'Gen Waruinge',
        city: "Nairobi",
        state: "Juja"
    };
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;
    this.postService.getPosts().subscribe(posts => {
        this.posts = posts
    });

}
  toggleHobbies(){
      if(this.showHobbies == true){
          this.showHobbies = false;
      } else{
          this.showHobbies = true;
      }
  }
  addHobby(hobby){
      this.hobbies.push(hobby)
  }
  deleteHobby(i){
      this.hobbies.splice(i, 1);
  }

}

interface address {
    street: string;
    city: string;
    state: string;
}
interface Post {
    id: number;
    title: string;
    body: string;
}