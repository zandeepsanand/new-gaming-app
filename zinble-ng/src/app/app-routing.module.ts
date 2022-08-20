import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponent } from './components/pages/main-home/main-home.component';
import { EsportsHomeComponent } from './components/pages/esports-home/esports-home.component';
import { BostingHomeComponent } from './components/pages/bosting-home/bosting-home.component';
import { MagazineHomeComponent } from './components/pages/magazine-home/magazine-home.component';
import { TournamentsHomeComponent } from './components/pages/tournaments-home/tournaments-home.component';
import { StreamingHomeComponent } from './components/pages/streaming-home/streaming-home.component';
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
import { PlayerDetailsPageComponent } from './components/pages/player-details-page/player-details-page.component';
import { TeamDetailsPageComponent } from './components/pages/team-details-page/team-details-page.component';
import { MatchDetailsPageComponent } from './components/pages/match-details-page/match-details-page.component';
import { TournamentsDetailsPageComponent } from './components/pages/tournaments-details-page/tournaments-details-page.component';
import { StreamSchedulePageComponent } from './components/pages/stream-schedule-page/stream-schedule-page.component';

import { GASettingsComponent } from './ggera/g-a-settings/g-a-settings.component';
import { SigninComponent } from './ggera/signin/signin.component';
import { ProfileComponent } from './ggera/profile/profile.component';
import { AccountDetailsComponent } from './ggera/account-details/account-details.component';
import { JoinPartyComponent } from './ggera/join-party/join-party.component';
import { PlayerPageComponent } from './ggera/player-page/player-page.component';
import { HomePageComponent } from './ggera/home-page/home-page.component';
import { ProRequestsComponent } from './ggera/pro-requests/pro-requests.component';
import { MyorderComponent } from './ggera/myorder/myorder.component';
import { CreatePartyComponent } from './ggera/create-party/create-party.component';
import { ChatboxPopupComponent } from './ggera/chatbox-popup/chatbox-popup.component';
import { AdminUsersComponent } from './ggera/admin-users/admin-users.component';
import { EarningsComponent } from './ggera/earnings/earnings.component';
import { SingleProComponent } from './ggera/single-pro/single-pro.component';
import { PlayersComponent } from './ggera/players/players.component';
import { UnderconstructionComponent } from './ggera/underconstruction/underconstruction.component';
import { LazyLoadingComponent } from './ggera/lazy-loading/lazy-loading.component';

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'login', component: SigninComponent},
    {path: 'account', component: AccountDetailsComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'join-party', component: JoinPartyComponent},
    {path: 'home-page', component: HomePageComponent},
    {path: 'coachings', component: ProRequestsComponent},
    {path: 'player-page', component: PlayerPageComponent},
    {path: 'my-orders', component: MyorderComponent},
    {path: 'create-party', component: CreatePartyComponent},
    {path: 'users', component: AdminUsersComponent},
    {path: 'pro-requests', component: ProRequestsComponent},
    {path: 'earnings', component: EarningsComponent},
    {path: 'single-pro', component: SingleProComponent},
    {path: 'players', component: PlayersComponent},
    {path: 'loading', component: LazyLoadingComponent},

    {path: '**', component: UnderconstructionComponent},











    // {path: '', component: MainHomeComponent},

    // {path: 'esports', component: EsportsHomeComponent},
    // {path: 'bosting', component: BostingHomeComponent},
    // {path: 'magazine', component: MagazineHomeComponent},
    // {path: 'tournaments', component: TournamentsHomeComponent},
    // {path: 'streaming', component: StreamingHomeComponent},
    // {path: 'team', component: TeamPageComponent},
    // {path: 'gallery', component: GalleryPageComponent},
    // {path: 'sponsors', component: SponsorsPageComponent},
    // {path: 'faq', component: FaqPageComponent},
    // {path: 'coming-soon', component: ComingSoonPageComponent},
    // {path: 'error', component: ErrorPageComponent},
    // {path: 'stream-schedule', component: StreamSchedulePageComponent},
    // {path: 'single-tournament', component: TournamentsDetailsPageComponent},
    // {path: 'single-match', component: MatchDetailsPageComponent},
    // {path: 'single-team', component: TeamDetailsPageComponent},
    // {path: 'single-player', component: PlayerDetailsPageComponent},
    // {path: 'products-list-1', component: ProductsListPageOneComponent},
    // {path: 'products-list-2', component: ProductsListPageTwoComponent},
    // {path: 'cart', component: CartPageComponent},
    // {path: 'checkout', component: CheckoutPageComponent},
    // {path: 'single-products', component: ProductsDetailsPageComponent},
    // {path: 'my-account', component: ProfileAuthenticationPageComponent},
    // {path: 'blog-1', component: BlogGridTwoInRowPageComponent},
    // {path: 'blog-2', component: BlogGridThreeInRowPageComponent},
    // {path: 'blog-3', component: BlogMasonryPageComponent},
    // {path: 'blog-4', component: BlogRightSidebarPageComponent},
    // {path: 'blog-5', component: BlogLeftSidebarPageComponent},
    // {path: 'single-blog', component: BlogDetailsPageComponent},
    // {path: 'contact', component: ContactPageComponent},
    // {path: '**', component: ErrorPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }