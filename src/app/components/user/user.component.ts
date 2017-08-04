import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age: number;
  email: string;
  address:Address;
  hobbies: string[];
  posts: Posts[];

  constructor(private dataService:DataService) {

   }

  ngOnInit() {
    this.name = 'Nico Leguizamon';
    this.age = 30;
    this.address = {
      street: '50 Main Street',
      city: 'Cordoba',
      state: 'CO'
    };
    this.hobbies = ['hob 1', 'hob 2'];

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

}

interface Address{
  street: string,
  city: string,
  state: string
}
interface Posts{
  id:number,
  title:string,
  body:string,
  userId: number
}
