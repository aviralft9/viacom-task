import { UserDetails } from './../_models/userdetails';
import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-listitemspage',
  templateUrl: './listitemspage.component.html',
  styleUrls: ['./listitemspage.component.css']
})
export class ListitemspageComponent implements OnInit {

    public userdetails: UserDetails[] = [];
    constructor(private userdetailsservice: UserdetailsService) { }

    ngOnInit(): void {
      this.userdetailsservice.getAll().subscribe((data:UserDetails []) => {
        this.userdetails = data;
      });
      console.log(this.userdetails);
    }

}
