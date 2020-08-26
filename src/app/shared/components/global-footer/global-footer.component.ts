import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { faFacebookSquare, faTwitterSquare, faLinkedin, faYoutube, faTwitch, faDiscord, faTelegram } from '@fortawesome/fontawesome-free-brands';

@Component({
    selector: 'app-global-footer',
    templateUrl: './global-footer.component.html',
    styleUrls: ['./global-footer.component.scss']
})
export class GlobalFooterComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild('hedgehogImage') hedgehogImg?: ElementRef;
    @ViewChild('hedgehogWrapper') hedgehogBox?: ElementRef;

    public logoFacebook = faFacebookSquare;
    public logoTwitter = faTwitterSquare;
    public logoLinkedIn = faLinkedin;
    public logoYoutube = faYoutube;
    public logoTwitch = faTwitch;
    public logoDiscord = faDiscord;
    public telegramLogo = faTelegram;

    constructor(private renderer: Renderer2) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.hedgehogBox.nativeElement.addEventListener('mouseover', () => {
            this.renderer.setAttribute(this.hedgehogImg.nativeElement, 'src', '/assets/images/hedgehog_colored.png');
        });
        this.hedgehogBox.nativeElement.addEventListener('mouseout', () => {
            this.renderer.setAttribute(this.hedgehogImg.nativeElement, 'src', '/assets/images/hedgehog_white.png');
        });
    }

    ngOnDestroy(): void {
        this.hedgehogImg.nativeElement.removeEventListener('mouseover');
        this.hedgehogImg.nativeElement.removeEventListener('mouseout');
    }

}
