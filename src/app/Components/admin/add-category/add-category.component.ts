import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/Category-Service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  constructor(private cate:CategoryService, private route:Router){}

  AddCat:FormGroup = new FormGroup({
    'title': new FormControl('',[Validators.required]),
    'description': new FormControl('',[Validators.required])
  })

  AddCategory(){
    this.cate.addCategory(this.AddCat.value).subscribe((res:any)=>{
      console.log(res);
      this.route.navigate(['/admin-dashboard/all-category']);
      Swal.fire({
        title: `${res.title}`,
        text:'Category added Successfully!!',
        icon: 'success'
      })
    })
  }
}
