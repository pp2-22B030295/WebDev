import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {isEmpty} from "rxjs";

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit{
  name: string | undefined;
  speed: number | undefined;
  model: string | undefined;
  colors: Colors | undefined;
  options: string[] | undefined;
  isEdit:boolean = false;

  constructor(){}

  ngOnInit(): void {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'M3'
    this.colors = {
      car: 'White',
      salon:'Red',
      wheels:'Silver'
    }
    this.options=["ABS","Salon","Auto Parking"];
  }

  carSelect(carName: string) {
    if (carName == 'bmw') {
      this.name = 'BWM';
      this.speed = 280;
      this.model = 'M5'
      this.colors = {
        car: 'Blue',
        salon: 'White',
        wheels: 'Brown'
      }
      this.options = ["ABS", "Salon", "Auto Parking"];
    } else if(carName == 'audi'){
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'M3'
      this.colors = {
        car: 'White',
        salon:'Red',
        wheels:'Silver'
      }
      this.options=["ABS","Salon","Auto Parking"];
      }else if(carName == 'mercedes'){
      this.name = 'Mercedes';
      this.speed = 210;
      this.model = 'M7'
      this.colors = {
        car: 'White',
        salon:'Blue',
        wheels:'Silver'
      }
      this.options=["ABS","Salon","Auto Parking"];
    }
    }

  addOpt(option:string){
    this.options?.unshift(option);
    return false;
  }

  deleteOpt(option:string){
    // @ts-ignore
    for(let i = 0 ; i < this.options?.length; i++){
      // @ts-ignore
      if(this.options[i] == option){
        this.options?.splice(i, 1);
        break;
      }
    }
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }
}


interface Colors{
  car: string;
  salon:string;
  wheels:string;
}
