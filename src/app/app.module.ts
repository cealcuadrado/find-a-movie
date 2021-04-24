/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from './shared/shared-components/shared-components.module';
// import { EmbeddedMediaModule } from 'ngx-embedded-media';

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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedComponentsModule
    // EmbeddedMediaModule.forRoot()
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
