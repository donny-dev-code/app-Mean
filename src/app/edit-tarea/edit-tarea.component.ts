import { Component, OnInit } from '@angular/core';
import { TareaEstados, TareaModel } from '../shared/tarea.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaService } from '../shared/tarea.service';
import { map,switchMap,of } from 'rxjs';

@Component({
  selector: 'app-edit-tarea',
  templateUrl: './edit-tarea.component.html',
  styleUrl: './edit-tarea.component.css'
})
export class EditTareaComponent implements OnInit{
  tarea:TareaModel = {} as TareaModel;
  tareaEstado: string[] = Object.values(TareaEstados);

  constructor(private route:ActivatedRoute, private servicio:TareaService, private router:Router){}
  
  ngOnInit(): void {
    this.tareaEstado=Object.values(TareaEstados);
    this.tarea
    
    
    this.route.paramMap
    .pipe(map(params=>params.get('id')))
    .pipe(switchMap(id=>{
      if (id) return this.servicio.getTarea(id);
      else return of(new TareaModel("","",0,"",new Date(),TareaEstados.Nohapagado,0,0));
    }))
    .subscribe(tarea=>{this.tarea=tarea;console.log(tarea);},
     (error)=> {console.log(error)});
    }
    calcularValorTotal(): number {
      return this.tarea.valorUnitario * this.tarea.cantidad;
    }
    onSubmit() {
      this.tarea.valorTotal = this.calcularValorTotal(); // Usando el método del modelo
      if (this.tarea._id) {
        this.servicio.updateTarea(this.tarea)
          .subscribe({
            next: data => { console.log(data); this.router.navigate(['/tareas']); },
            error: error => console.log(error)
          });
      } else {
        this.servicio.addTarea(this.tarea)
          .subscribe({
            next: data => { console.log(data); this.router.navigate(['/tareas']); },
            error: error => console.log(error)
          });
      }
    }

    
  }
  // RouterModule.forRoot([])
  
  
  
