import { UserDetails } from './../_models/userdetails';
import { UserdetailsService } from './../userdetails.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-additemspage',
  templateUrl: './additemspage.component.html',
  styleUrls: ['./additemspage.component.css']
})
export class AdditemspageComponent implements OnInit {

  user: UserDetails;
  formdata: FormGroup;
  submitted = false;
  constructor(
      private formBuilder: FormBuilder,
      private userdetailservice:UserdetailsService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.formdata = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: [''],
      ContactNo: [''],
      City: ['']
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.formdata.controls; }

  submitUserDetials(){
    this.submitted = true;
    this.user ={
      firstname: this.f.FirstName.value,
      lastname: this.f.LastName.value,
      city: this.f.City.value,
      contactno: this.f.ContactNo.value
    }

    this.userdetailservice.addNewUserDetail(this.user.firstname, this.user.lastname, this.user.city, this.user.contactno);

    this.router.navigate(['/ListItems']);
  }

}
