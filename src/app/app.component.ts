import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './service/api-service.service'
import { RecipeSchema } from './Model/RecipeSchema';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 
  title = 'Recipe-App';
  page:number=1; //pagination
 
  searchKey:string=''
  recipes: RecipeSchema[] = [];

  constructor(private api:ApiServiceService){}

  ngOnInit(): void {
    this.getAllRecipes()
  }

  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.recipes=res.recipes
        
      },
      error:(reason:any)=>{
        console.log(reason);
        
      }
    })
  }

  onCategorySelected(category: string) {
    if (category == 'All') {
      // If the selected category is 'All', fetch all recipes
      this.api.getAllRecipesAPI().subscribe({
        next:(res:any)=>{
          this.recipes=res.recipes
        },
        error:(reason:any) => {
          console.error('Error fetching recipes:', reason);
        }
      }
        
    );
    } else {
      this.api.getrecipeByCategory(category).subscribe({
        next:(response: any) => {
          
          this.recipes = category === 'All' ? response.recipes : 
            response.recipes.filter((item: RecipeSchema) => 
              item.mealType !== undefined && item.mealType.includes(category)
            );
            console.log("category",this.recipes);
        },
        error:(reason:any)=>{
          console.error('Error fetching recipes by category:', reason);

        }
      }
        
      );
    }
  }


}
