/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from './shared/shared-components/shared-components.module';
import { SearchBarModule } from './shared/shared-modules/search-bar/search-bar.module';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';

/* Components */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicLayoutComponent } from './layouts/basic-layout/basic-layout.component';
import { HeaderComponent } from './layouts/basic-layout/header/header.component';
import { FooterComponent } from './layouts/basic-layout/footer/footer.component';
import { MainComponent } from './layouts/basic-layout/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Services */
import { MovieSearchService } from './shared/shared-services/movie-search.service';

@NgModule({
  declarations: [
    AppComponent,
    BasicLayoutComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    SharedComponentsModule,
    SearchBarModule,
    RouterModule
  ],
  providers: [
    {
      provide: Window,
      useValue: window
    },
    MovieSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
