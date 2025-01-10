import { NgModule } from "@angular/core";
import { CounterComponen } from "./counter/counter.component";


@NgModule({
  declarations:[
    CounterComponen
  ],
  exports:[
    CounterComponen
  ],
})
export class CounterModule {

}
