import { DOCUMENT } from "@angular/common";
import { ChangeDetectorRef, Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subject, tap } from 'rxjs';
import { SocialLabel } from "../../core/models/social-label";
import { DataStorageService } from "../../core/services/data-storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  readonly title: string = "aoleszkiewicz";

  socialLabels$ = new Subject<SocialLabel[]>();

  floatingHeader$ = new Subject<boolean>();

  @ViewChild('header', {read: ElementRef})
  header!: ElementRef;

  constructor(
    private _data: DataStorageService,
  ) {}

  ngOnInit(): void {
    this._data
      .getSocialLabels()
      .subscribe((data: SocialLabel[]) => this.socialLabels$.next(data));
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    const headerHeight = this.header.nativeElement.clientHeight;

    if (headerHeight && window.scrollY > headerHeight) {
      this.floatingHeader$.next(true);
    } else {
      this.floatingHeader$.next(false);
    }
  }
}
