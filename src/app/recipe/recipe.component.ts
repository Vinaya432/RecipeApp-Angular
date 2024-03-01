import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit{

  singleRecipe:any={}

  constructor(private api:ApiServiceService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      console.log(res);
      const {id}=res
      this.getSingleRecipe(id)
    })
  }

  getSingleRecipe(rid:string){
    this.api.getARecipeAPI(rid).subscribe({
      next:(res:any)=>{
        console.log(res); 
        this.singleRecipe=res
      },
      error:(reason:any)=>{
        console.log("Error fetching recipe :",reason);
        
      }
    })
  }

}
