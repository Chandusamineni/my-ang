
import { Routes } from '@angular/router';

import { AddPropertyComponent } from './property/add-property/add-property.component';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './property-list/property-list.component';

export const routes: Routes = [

    {path: '', component: PropertyListComponent}  ,
    {path: 'rent-property', component: PropertyListComponent}  ,
 {path: 'add-property', component: AddPropertyComponent}   
 
];
