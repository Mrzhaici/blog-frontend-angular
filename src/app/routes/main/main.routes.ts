import { Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import { HomeComponent } from "./home/home.component";

// In home/routes.ts:
export const MainRoutes: Routes = [
  {
    path:'',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];
