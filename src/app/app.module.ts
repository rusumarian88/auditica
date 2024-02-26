import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SectionWithTitleComponent } from './components/section-with-title/section-with-title.component';
import { PlayingBarComponent } from './components/playing-bar/playing-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HederComponent } from './components/heder/heder.component';
import { ReleasesCardComponent } from './components/releases-card/releases-card.component';
import { LikeCardComponent } from './components/like-card/like-card.component';
import { PlayedCardComponent } from './components/played-card/played-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SectionWithTitleComponent,
    PlayingBarComponent,
    NavBarComponent,
    HederComponent,
    ReleasesCardComponent,
    LikeCardComponent,
    PlayedCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
