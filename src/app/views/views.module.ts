import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LandingViewModule } from "./landing-view/landing-view.module";
import { ViewsRoutingModule } from "./views-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, LandingViewModule, ViewsRoutingModule],
  exports: [],
})
export class ViewsModule {}
