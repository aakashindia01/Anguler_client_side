import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/users.service';
<<<<<<< HEAD
=======
import { User } from 'src/app/interfaces/user';
>>>>>>> c081222fbbd0b286660968974db1f583a64ad839
import { LoadingService } from 'src/app/services/loading.service';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  // template:`
  // `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loading$ = this.loader.loading$;

  users:any;
  searchValue: string ='';
  constructor(private usersService: UsersService,
    public loader: LoadingService){}
 
  

  ngOnInit(): void {
    this.users = this.usersService.getUsers().subscribe(data=>{
      this.users = data;
      
    });
  }

}
