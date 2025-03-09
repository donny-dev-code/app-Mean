import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { TareaListaComponent } from './tarea-lista/tarea-lista.component';
import { EditTareaComponent } from './edit-tarea/edit-tarea.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestInterceptor } from './testInterceptor';
import { TestInterceptor2 } from './testInterceptor2';
const appRoutes:Routes=[
  {path:'tareas/wear/mean', component:TareaListaComponent},
  {path:'tareas/wear/mean/:id/edit', component:EditTareaComponent},
  {path:'tareas/wear/mean/new', component:EditTareaComponent},
  {path:'**',redirectTo:'/tareas/wear/mean', pathMatch:'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    TareaListaComponent,
    EditTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: TestInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:TestInterceptor2, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
