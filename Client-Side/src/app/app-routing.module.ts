import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { AuthGuard } from './auth.guard';
import { OrderListsComponent } from './ggera/order-lists/order-lists.component';
import { TwitchComponent } from './ggera/twitch/twitch.component';
import { StatsComponent } from './ggera/stats/stats.component';

const routes: Routes = [
    
    { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
    { path: 'login', component: SigninComponent },
    { path: 'account', canActivate: [AuthGuard], component: AccountDetailsComponent },
    { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
    { path: 'join-party', canActivate: [AuthGuard], component: JoinPartyComponent },
    { path: 'home-page', canActivate: [AuthGuard], component: HomePageComponent },
    { path: 'coachings', canActivate: [AuthGuard], component: ProRequestsComponent },
    { path: 'player-page', canActivate: [AuthGuard], component: PlayerPageComponent },
    { path: 'my-orders', canActivate: [AuthGuard], component: OrderListsComponent },
    { path: 'create-party', canActivate: [AuthGuard], component: CreatePartyComponent },
    { path: 'users', canActivate: [AuthGuard], component: AdminUsersComponent },
    { path: 'pro-requests', canActivate: [AuthGuard], component: ProRequestsComponent },
    { path: 'earnings', canActivate: [AuthGuard], component: EarningsComponent },
    { path: 'single-pro', canActivate: [AuthGuard], component: SingleProComponent },
    { path: 'players', canActivate: [AuthGuard], component: PlayersComponent },
    { path: 'loading', component: LazyLoadingComponent },
    { path: 'pro-home', component: MyorderComponent },
    { path: 'twitch-player', component: TwitchComponent },
    { path: 'stats', component: StatsComponent },


    { path: '**', canActivate: [AuthGuard], component: UnderconstructionComponent },










];

@NgModule({
    imports: [RouterModule.forRoot(routes,  {
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }