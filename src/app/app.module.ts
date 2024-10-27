import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TareaListaComponent } from './tarea-lista/tarea-lista.component';
import { EditTareaComponent } from './edit-tarea/edit-tarea.component';
import { HttpClientModule } from '@angular/common/http';
const appRoutes:Routes=[
  {path:'tareas', component:TareaListaComponent},
  {path:'tareas/:id/edit', component:EditTareaComponent},
  {path:'tareas/new', component:EditTareaComponent},
  {path:'**',redirectTo:'/tareas', pathMatch:'full'},
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
