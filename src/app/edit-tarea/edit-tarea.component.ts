import { Component, OnInit } from '@angular/core';
import { TareaEstados, TareaModel } from '../shared/tarea.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { TareaService } from '../shared/tarea.service';

@Component({
  selector: 'app-edit-tarea',
  templateUrl: './edit-tarea.component.html',
  styleUrl: './edit-tarea.component.css'
})
export class EditTareaComponent implements OnInit{
  tarea:TareaModel[]=[]
  tareaEstado:TareaEstados[]=[]
  constructor(private route:ActivatedRoute, private router: Router, private servicio:TareaService){}
  
  ngOnInit(): void {
    this.tareaEstado=Object.values(TareaEstados);
    
  }
}
