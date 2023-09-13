import { NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-loading-spinner",
  template: ` <div *ngIf="isLoading" [class]="'lds-ring-' + spinnerSize">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>`,
  styleUrls: ["./loading-spinner.component.scss"],
  standalone: true,
  imports: [NgIf],
})
export class LoadingSpinnerComponent {
  @Input()
  isLoading?: boolean = true;

  @Input()
  spinnerSize?: "small" | "medium" = "medium";
}
