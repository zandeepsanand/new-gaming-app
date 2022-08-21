import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { MainHomeComponent } from './components/pages/main-home/main-home.component';
import { AwardsComponent } from './components/common/awards/awards.component';
import { EsportsHomeComponent } from './components/pages/esports-home/esports-home.component';
import { FooterStyleOneComponent } from './components/common/footer-style-one/footer-style-one.component';
import { SocialComponent } from './components/common/social/social.component';
import { SubscribeStyleOneComponent } from './components/common/subscribe-style-one/subscribe-style-one.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { ShopStyleOneComponent } from './components/common/shop-style-one/shop-style-one.component';
import { TeamComponent } from './components/common/team/team.component';
import { NewsComponent } from './components/common/news/news.component';
import { MatchesStyleOneComponent } from './components/common/matches-style-one/matches-style-one.component';
import { MainBannerComponent } from './components/pages/main-home/main-banner/main-banner.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { ShopStyleTwoComponent } from './components/common/shop-style-two/shop-style-two.component';
import { LiveStreamComponent } from './components/common/live-stream/live-stream.component';
import { TopRankingTeamStyleOneComponent } from './components/common/top-ranking-team-style-one/top-ranking-team-style-one.component';
import { MatchesStyleTwoComponent } from './components/common/matches-style-two/matches-style-two.component';
import { EsportsMainBannerComponent } from './components/pages/esports-home/esports-main-banner/esports-main-banner.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { BostingHomeComponent } from './components/pages/bosting-home/bosting-home.component';
import { FooterStyleTwoComponent } from './components/common/footer-style-two/footer-style-two.component';
import { HistoryComponent } from './components/common/history/history.component';
import { SubscribeStyleTwoComponent } from './components/common/subscribe-style-two/subscribe-style-two.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { OurExpertsComponent } from './components/common/our-experts/our-experts.component';
import { GamesComponent } from './components/common/games/games.component';
import { FeaturedGamesComponent } from './components/common/featured-games/featured-games.component';
import { ServicesComponent } from './components/common/services/services.component';
import { BostingMainBannerComponent } from './components/pages/bosting-home/bosting-main-banner/bosting-main-banner.component';
import { MagazineHomeComponent } from './components/pages/magazine-home/magazine-home.component';
import { MagazineMainBannerComponent } from './components/pages/magazine-home/magazine-main-banner/magazine-main-banner.component';
import { MagazineNewsComponent } from './components/pages/magazine-home/magazine-news/magazine-news.component';
import { TournamentsHomeComponent } from './components/pages/tournaments-home/tournaments-home.component';
import { StreamingHomeComponent } from './components/pages/streaming-home/streaming-home.component';
import { TopRankingTeamStyleTwoComponent } from './components/common/top-ranking-team-style-two/top-ranking-team-style-two.component';
import { TrendingStreamsComponent } from './components/common/trending-streams/trending-streams.component';
import { UpcomingTournamentsComponent } from './components/common/upcoming-tournaments/upcoming-tournaments.component';
import { PopularLeaguesComponent } from './components/common/popular-leagues/popular-leagues.component';
import { TournamentsMainBannerComponent } from './components/pages/tournaments-home/tournaments-main-banner/tournaments-main-banner.component';
import { UpcomingStreamingComponent } from './components/common/upcoming-streaming/upcoming-streaming.component';
import { TrendingStreamingComponent } from './components/common/trending-streaming/trending-streaming.component';
import { StreamingMainBannerComponent } from './components/pages/streaming-home/streaming-main-banner/streaming-main-banner.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { SponsorsPageComponent } from './components/pages/sponsors-page/sponsors-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { ProductsListPageOneComponent } from './components/pages/products-list-page-one/products-list-page-one.component';
import { ProductsListPageTwoComponent } from './components/pages/products-list-page-two/products-list-page-two.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';
import { BlogGridTwoInRowPageComponent } from './components/pages/blog-grid-two-in-row-page/blog-grid-two-in-row-page.component';
import { BlogGridThreeInRowPageComponent } from './components/pages/blog-grid-three-in-row-page/blog-grid-three-in-row-page.component';
import { BlogMasonryPageComponent } from './components/pages/blog-masonry-page/blog-masonry-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { StreamSchedulePageComponent } from './components/pages/stream-schedule-page/stream-schedule-page.component';
import { TournamentsDetailsPageComponent } from './components/pages/tournaments-details-page/tournaments-details-page.component';
import { MatchDetailsPageComponent } from './components/pages/match-details-page/match-details-page.component';
import { TeamDetailsPageComponent } from './components/pages/team-details-page/team-details-page.component';
import { PlayerDetailsPageComponent } from './components/pages/player-details-page/player-details-page.component';

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

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    MainHomeComponent,
    AwardsComponent,
    EsportsHomeComponent,
    FooterStyleOneComponent,
    SocialComponent,
    SubscribeStyleOneComponent,
    PartnerComponent,
    ShopStyleOneComponent,
    TeamComponent,
    NewsComponent,
    MatchesStyleOneComponent,
    MainBannerComponent,
    NavbarStyleOneComponent,
    BlogComponent,
    ShopStyleTwoComponent,
    LiveStreamComponent,
    TopRankingTeamStyleOneComponent,
    MatchesStyleTwoComponent,
    EsportsMainBannerComponent,
    NavbarStyleTwoComponent,
    BostingHomeComponent,
    FooterStyleTwoComponent,
    HistoryComponent,
    SubscribeStyleTwoComponent,
    FeedbackComponent,
    OurExpertsComponent,
    GamesComponent,
    FeaturedGamesComponent,
    ServicesComponent,
    BostingMainBannerComponent,
    MagazineHomeComponent,
    MagazineMainBannerComponent,
    MagazineNewsComponent,
    TournamentsHomeComponent,
    StreamingHomeComponent,
    TopRankingTeamStyleTwoComponent,
    TrendingStreamsComponent,
    UpcomingTournamentsComponent,
    PopularLeaguesComponent,
    TournamentsMainBannerComponent,
    UpcomingStreamingComponent,
    TrendingStreamingComponent,
    StreamingMainBannerComponent,
    GalleryPageComponent,
    TeamPageComponent,
    ContactPageComponent,
    SponsorsPageComponent,
    FaqPageComponent,
    ComingSoonPageComponent,
    ErrorPageComponent,
    ProductsListPageOneComponent,
    ProductsListPageTwoComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ProductsDetailsPageComponent,
    ProfileAuthenticationPageComponent,
    BlogGridTwoInRowPageComponent,
    BlogGridThreeInRowPageComponent,
    BlogMasonryPageComponent,
    BlogRightSidebarPageComponent,
    BlogLeftSidebarPageComponent,
    BlogDetailsPageComponent,
    StreamSchedulePageComponent,
    TournamentsDetailsPageComponent,
    MatchDetailsPageComponent,
    TeamDetailsPageComponent,
    PlayerDetailsPageComponent,
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
