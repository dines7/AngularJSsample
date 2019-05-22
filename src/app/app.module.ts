;
import { AnimationComponent } from './animations/animation/animation.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router'
import {FormsModule} from  '@angular/forms'
import { ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SamplecomponentComponent } from './samplecomponent/samplecomponent.component';
import { DaughterComponent } from './nuclearfamily/daughter/daughter.component';
import { FatherComponent } from './nuclearfamily/father/father.component';
import { MotherComponent } from './nuclearfamily/mother/mother.component';
import { SonComponent } from './nuclearfamily/son/son.component';
import { FamilyComponent } from './nuclearfamily/family/family.component';
import { AllcomponentsComponent } from './assignment/allcomponents/allcomponents.component';
import { ReviewComponent } from './assignment/allcomponents/review/review.component';
import { TitleComponent } from './assignment/allcomponents/title/title.component';
import { DescriptionComponent } from './assignment/allcomponents/description/description.component';
import { ThumbnailComponent } from './assignment/allcomponents/thumbnail/thumbnail.component';
import { DirectiveComponent } from './super-html/directive/directive.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ErrorpageComponent } from './Notfound/errorpage/errorpage.component';
import { ReactiveformsComponent } from './forms/reactiveforms/reactiveforms.component';
import { RemoteComponent } from './restapi/remote/remote.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';


@NgModule({
  declarations: [
    AppComponent,
    SamplecomponentComponent,
    DaughterComponent,
    FatherComponent,
    MotherComponent,
    SonComponent,
    FamilyComponent,
    AllcomponentsComponent, 
    ReviewComponent,
    TitleComponent,
    DescriptionComponent,
    ThumbnailComponent,
    DirectiveComponent,
    PipeDemoComponent,
    ErrorpageComponent,
    ReactiveformsComponent,
    AnimationComponent,
    RemoteComponent,
    EmployeedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        redirectTo:'pipe',
        pathMatch:'full'
      },
      {
        path:'family',
        component:FamilyComponent,
        children:[
          {
            path:'father',
            component:FatherComponent
          },
          {
            path:'mother',
            component:MotherComponent
          },
          {
            path:'son',
            component:SonComponent
          },
          {
            path:'daughter',
            component:DaughterComponent
          }
        ]
      },
      {
        path:'review',
        component:ReviewComponent
      },
      {
        path:'directive',
        component:DirectiveComponent
      },
      {
        path:'pipe',
        component:PipeDemoComponent
      },
      {
        path:'forms',
        component:ReactiveformsComponent
      },
      {     
        path:'animate',
        component:AnimationComponent
      },
      {     
        path:'remote',
        component:RemoteComponent
      },
      {
        path:'**',
        component:ErrorpageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
