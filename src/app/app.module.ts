import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environment/environment';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptor } from './auth.interceptor';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
//import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    // Moved to declarations
  ],
  imports: [
    BrowserModule,
    // HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AppComponent
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideAnimations()
  ],
  bootstrap: []  // Added AppComponent to bootstrap
})
export class AppModule { }
