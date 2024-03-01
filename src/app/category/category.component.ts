import { Component, EventEmitter, Output } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { RecipeSchema } from '../Model/RecipeSchema';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  // categorizedRecipes: RecipeSchema[] = [];

  selectedCategory: string = 'All';
  @Output() categorySelected=new EventEmitter()

  // constructor(private api:ApiServiceService){}

  // filterByCategory(category:string){
  //   this.api.getrecipeByCategory(category).subscribe(
  //       (response: any)=>{
  //         console.log(response);
  //         if(category=='All'){
  //           this.categorizedRecipes=response.recipes

  //         }else{
  //           this.categorizedRecipes = response.recipes.filter((item: RecipeSchema) => 
  //         item.mealType !== undefined && item.mealType.includes(category))
  //         }
          
  //         // console.log("category",this.categorizedRecipes);
  //       },
  //       (error) => {
  //         console.error('Error fetching recipes by category:', error);
  //       }
  //     )
  // }
  onSelectCategory(category: string) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }

}
