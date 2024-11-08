import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TareaListaComponent } from './tarea-lista.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TareaService } from '../shared/tarea.service';
import { TareaModel } from '../shared/tarea.model';
import { TareaEstados } from '../shared/tarea.model';
import { of } from 'rxjs';


describe('TareaListaComponent', () => {
  let component: TareaListaComponent;
  let fixture: ComponentFixture<TareaListaComponent>;
  //creación de un spy del servicio Tareaservice para simular la respuesta de getallTareas
  let tareaServiceSpy: jasmine.SpyObj<TareaService>;

  beforeEach(async () => {
     // Creamos un espía para TareaService
    tareaServiceSpy = jasmine.createSpyObj('TareaService', ['getAllTareas']);
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[
        { provide: TareaService, useValue: { getAllTareas: () => of([]) }},
      ],
      declarations: [TareaListaComponent],
    }).compileComponents();
  });
  it('should crear una instancia de TareaModel', () => {
    const tarea = new TareaModel(
      '1',
      'Tarea de ejemplo',
      5,
      'Descripción de la tarea',
      new Date(),
      TareaEstados.Pago,
      100,
      500
    );
    expect(tarea).toBeTruthy();
  });
 
  beforeEach(() => {
    // Crear el componente y disparar la detección de cambios
    fixture = TestBed.createComponent(TareaListaComponent);
    component = fixture.componentInstance;
    // Simular la respuesta de getAllTareas
    tareaServiceSpy.getAllTareas.and.returnValue(of([])); // Simula una respuesta vacía
    fixture.detectChanges();
  });

it('should  create', () => {
    expect(TareaListaComponent).toBeTruthy();
  });
 
});
