import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CarComponent} from "./components/car/car.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
