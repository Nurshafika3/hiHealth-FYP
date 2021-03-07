import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
public items: any=[];

  constructor() {
    this.items = [
   {title: "Asthma", page:"../asthma"},
   {title: "Depression", page:"../depression"},
   {title: "Allergies", page:"../allergy"},
   {title: "Bad Breath", page:"../breath"},
   {title: "Ear Infection", page:"../ear"},
   {title: "Diabetes", page:"../diabetes"},
   {title: "Hemophilia", page:"../hemo"},
   {title: "Hand Sweating Excessive(Hyperhidrosis)", page:"../hyper"},
   {title: "Malaria", page:"../malaria"},
   {title: "Neck Pain", page:"../neck"},
   {title: "Obesity", page:"../obesity"},
   {title: "Obsessive Compulsive Disolder(OCD)", page:"../ocd"},
   {title: "Pain Elbow", page:"../elbow"},
   {title: "Pain Kidney", page:"../kidney"},
   {title: "Salmonella Food Poisoning (Salmonellosis)", page:"../salmon"},
   {title: "Taste Disorder", page:"../taste"},  
   {title: "Addison's Diseases", page:"../addison"},
   {title: "Dengue Fever", page:"../dengue"},
   {title: "Disorder Sleep", page:"../sleep"},
   {title: "Dry Eyes", page:"../eyes"},


   ];

}

  filterItems(searchTerm){
   return this.items.filter(item => {
   return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;

   });
   }
}
