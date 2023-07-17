import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/Category-Service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit{
  constructor(private category:CategoryService) {}

  cate:any;
  ngOnInit(): void {
    this.getAllCategory();
  }
  
  getAllCategory(){
    this.category.getAllCategory().subscribe((res:any)=>{
      console.log(res);
      this.cate = res;
    })
  }

  deleteCategory(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this Category?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'    
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        ),
        this.category.deleteCategoryById(id).subscribe((res)=>{
          console.log(res);
          this.getAllCategory();
        })
    
      }
    })
  }

}
