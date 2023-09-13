import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";
import { LandingViewComponent } from "./landing-view.component";

@NgModule({
  declarations: [LandingViewComponent],
  exports: [LandingViewComponent],
  imports: [CommonModule, ComponentsModule],
})
export class LandingViewModule {}
