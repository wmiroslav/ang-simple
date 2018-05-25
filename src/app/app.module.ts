import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { TableMenuComponent } from './table-menu/table-menu.component';
import { TableContentComponent } from './table-content/table-content.component';
import { ProductTypeComponent } from './product-type/product-type.component';


// services
import { ApiService } from '../services/api-service';

// pipes
import { FilterPipe } from '../pipes/filter-pipe';

// directive
import { ColorizeDirective } from './directives/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterPipe,
    TableComponent,
    TableMenuComponent,
    TableContentComponent,
    ProductTypeComponent,
    ColorizeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }






