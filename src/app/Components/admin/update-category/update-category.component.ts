import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/Category-Service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  constructor(private jitu:ActivatedRoute, private update:CategoryService, private route:Router){}

  id:any;
  ngOnInit(): void {
    this.jitu.params.subscribe((res:any)=>{
      this.id = res.id;
    })
    this.getCategoryById();
  }

  UpdateCat: FormGroup = new FormGroup({
    'category_id': new FormControl('',[Validators.required]),
    'title': new FormControl('',[Validators.required]),
    'description': new FormControl('',[Validators.required])
  })

  updateValue(){
    this.update.updateCategory(this.UpdateCat.value).subscribe((res:any)=>{
      Swal.fire({
        title:`${res.title}`,
        text:'Category updated successfully!!',
        icon:'success'
      })
      this.route.navigate(['/admin-dashboard/all-category']);
    })
  }

  getCategoryById(){
    this.update.getCategoryById(this.id).subscribe((res)=>{
      this.UpdateCat.setValue(res);
    })
  }

}
