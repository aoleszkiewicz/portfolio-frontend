import { Component } from "@angular/core";
import { ComponentsModule } from "../../components/components.module";
import { MetaTagService } from "../../core/services/meta-tag.service";

@Component({
  selector: "app-landing-view",
  templateUrl: "./landing-view.component.html",
  styleUrls: ["./landing-view.component.scss"],
})
export class LandingViewComponent {
  constructor(private _metaTagService: MetaTagService) { }
}
