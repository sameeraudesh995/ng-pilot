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
import {getFirestore, provideFirestore} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    // Moved to declarations
  ],
  imports: [
    BrowserModule,
    // HttpClientModule,
    //AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AppComponent
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"ng-pilot-auth-f6271","appId":"1:514590325027:web:cacdc1fb1eb0d6c6463496","storageBucket":"ng-pilot-auth-f6271.firebasestorage.app","apiKey":"AIzaSyDHZzRAR7qdCms6ye21txmb6QcYs63Fskw","authDomain":"ng-pilot-auth-f6271.firebaseapp.com","messagingSenderId":"514590325027","measurementId":"G-LQV596X6HD"})),
    provideAuth(() => getAuth()), provideFirestore(() => getFirestore())

  ],
  bootstrap: []  // Added AppComponent to bootstrap
})
export class AppModule { }
