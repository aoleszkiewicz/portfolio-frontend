import { ChangeDetection } from "@angular/cli/lib/config/workspace-schema";
import { DOCUMENT } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { ScreenSize } from "../../core/enums/screen-size";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit, AfterViewInit, OnDestroy {
  public readonly title: string = "🕸️ ur friendly neighborhood fullstack dev!";

  readonly descriptionDesktop: string =
    "I am Aleksander Oleszkiewicz, a 20-year-old self-taught frontend developer based in Bydgoszcz, Poland. My expertise lies in Angular, Typescript, and Tailwind CSS, enabling me to create innovative and captivating user interfaces. Besides my frontend skills, I also excel in developing backend API applications using ASP.NET, and I am currently expanding my knowledge with Node.js.";
  readonly descriptionMobile: string =
    "I'm a self-taught web developer with a passion for Angular. Experienced in building innovative web apps, UI design, API interactions, and performance optimization.";

  public description$ = new Subject<string>();

  private screenSize$ = new BehaviorSubject<number | undefined>(undefined);

  private get screenSize() {
    return this.screenSize$.value;
  }

  constructor(
    @Inject(DOCUMENT) document: Document,
    readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.screenSize$.next(document.defaultView?.window.screen.width as number);
    this.changeDescription(this.screenSize as number);
  }

  ngAfterViewInit() {
    this.onResize();
    this.cdr.detectChanges();
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.screenSize$.next(document.defaultView?.window.screen.width as number);
    this.changeDescription(this.screenSize as number);
  }

  ngOnDestroy() {
    this.screenSize$.unsubscribe();
    this.description$.unsubscribe();
  }

  changeDescription(screenSize: number) {
    this.description$.next(
      screenSize >= ScreenSize.DESKTOP
        ? this.descriptionDesktop
        : this.descriptionMobile
    );
  }
}
