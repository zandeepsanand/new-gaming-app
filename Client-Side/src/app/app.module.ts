import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Our pages 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {  GoogleLoginProvider} from '@abacritt/angularx-social-login';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {NgxStripeModule} from 'ngx-stripe'

import { GASettingsComponent } from './ggera/g-a-settings/g-a-settings.component';
import { SigninComponent } from './ggera/signin/signin.component';
import { HeroService } from './hero.service';
import { ProfileComponent } from './ggera/profile/profile.component';
import { AccountDetailsComponent } from './ggera/account-details/account-details.component';
import { ProRequestsComponent } from './ggera/pro-requests/pro-requests.component';
import { JoinPartyComponent } from './ggera/join-party/join-party.component';
import { PlayerPageComponent } from './ggera/player-page/player-page.component';
import { HomePageComponent } from './ggera/home-page/home-page.component';
import { MyorderComponent } from './ggera/myorder/myorder.component';
import { CreatePartyComponent } from './ggera/create-party/create-party.component';
import { ChatboxPopupComponent } from './ggera/chatbox-popup/chatbox-popup.component';
import { NavBarComponent } from './ggera/nav-bar/nav-bar.component';
import { NewFooterComponent } from './ggera/new-footer/new-footer.component';
import { AdminUsersComponent } from './ggera/admin-users/admin-users.component';
import { EarningsComponent } from './ggera/earnings/earnings.component';
import { SingleProComponent } from './ggera/single-pro/single-pro.component';
import { PlayersComponent } from './ggera/players/players.component';
import { SubscriptionsComponent } from './ggera/subscriptions/subscriptions.component';
import { UnderconstructionComponent } from './ggera/underconstruction/underconstruction.component';
import { LazyLoadingComponent } from './ggera/lazy-loading/lazy-loading.component';
import { AuthGuard } from './auth.guard';
import { OrderListsComponent } from './ggera/order-lists/order-lists.component';
import { TwitchComponent } from './ggera/twitch/twitch.component';
import { StatsComponent } from './ggera/stats/stats.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { PreloaderComponent } from './ggera/preloader/preloader.component';
import { SocialComponent } from './ggera/social/social.component';
import { MakeMeProComponent } from './ggera/make-me-pro/make-me-pro.component';
import { ChatScreenComponent } from './ggera/chat-screen/chat-screen.component';
import { PartyListComponent } from './ggera/party-list/party-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    GASettingsComponent,
    SigninComponent,
    ProfileComponent,
    AccountDetailsComponent,
    ProRequestsComponent,
    JoinPartyComponent,
    PlayerPageComponent,
    HomePageComponent,
    MyorderComponent,
    CreatePartyComponent,
    ChatboxPopupComponent,
    NavBarComponent,
    NewFooterComponent,
    AdminUsersComponent,
    EarningsComponent,
    SingleProComponent,
    PlayersComponent,
    SubscriptionsComponent,
    UnderconstructionComponent,
    LazyLoadingComponent,
    OrderListsComponent,
    TwitchComponent,
    StatsComponent,
    SearchFilterPipe,
    SocialComponent,
    MakeMeProComponent,
    ChatScreenComponent,
    PartyListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_51LT4FJSBGyD7UYjV7Uzl35ECOGv6TAtzwwYlAokpfqWpLNoXEZq1Ov3RoijNAxrN5fRhYqxzedauoF7tyFlbgr9q002zPPPLTa')

  ],
  providers: [HeroService,AuthGuard,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('175613608118-or5k2udnug8clivm7enruru42qnk6qd4.apps.googleusercontent.com'),
          }        
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig
      
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
