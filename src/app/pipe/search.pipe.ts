import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allRecipes:any[],searchKey:string):any {
    const result:any=[]
    

    if(!allRecipes || searchKey==""){
      return allRecipes
    }
    allRecipes.forEach((item=>{
      if(item.name?.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
      if(item.cuisine?.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }

    }))

    return result;
  }

}
