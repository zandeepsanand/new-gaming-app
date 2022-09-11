import { Component, OnInit, Input } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
    selector: "app-video-player",
    templateUrl: "./video-player.component.html",
    styleUrls: ["./video-player.component.scss"],
})
export class VideoPlayerComponent implements OnInit {
    @Input()
    src: string;
    constructor() {}

    ngOnInit(): void {
        const url = environment.originUrl;
        if (this.src.indexOf("?") > -1) {
            this.src += `origin=${url}`;
        } else this.src += `&origin=${url}`;
    }
}
