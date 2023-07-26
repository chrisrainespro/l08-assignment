import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DogComponent } from "./components/dog/dog.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: DogComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogRoutingModule { }
