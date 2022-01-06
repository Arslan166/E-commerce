import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';


const MaterialComponents = [MatBadgeModule];


@NgModule({

  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
