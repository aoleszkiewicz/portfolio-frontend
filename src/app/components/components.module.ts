import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from "../core/ui/loading-spinner/loading-spinner.component";
import { HeaderComponent } from "./header/header.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsetComponent } from "./skillset/skillset.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProjectsComponent,
    SkillsetComponent,
    WelcomeComponent,
    ContactComponent,
  ],
  exports: [
    HeaderComponent,
    ProjectsComponent,
    SkillsetComponent,
    WelcomeComponent,
    ContactComponent,
  ],
  imports: [CommonModule, LoadingSpinnerComponent, ReactiveFormsModule],
  providers: [],
})
export class ComponentsModule {}
