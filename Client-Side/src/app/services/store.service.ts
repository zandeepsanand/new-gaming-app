import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { UserModel } from "../common/interface/user.interface";

@Injectable({
    providedIn: "root",
})
export class StoreService {
    private readonly _selectedGame$: BehaviorSubject<string> = new BehaviorSubject(null);
    private readonly _currentUser$: BehaviorSubject<UserModel> = new BehaviorSubject(null);

    constructor() {}

    get selectedGame$() {
        return this._selectedGame$.asObservable();
    }

    set selectedGame(v: string) {
        localStorage.setItem("selected.game", v);
        this._selectedGame$.next(v);
    }

    get currentUser$() {
        return this._currentUser$.asObservable();
    }

    set currentUser(user: UserModel) {
        this._currentUser$.next(user);
    }
}
