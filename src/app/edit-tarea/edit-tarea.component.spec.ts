import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { EditTareaComponent } from './edit-tarea.component';
import { TareaService } from '../shared/tarea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { TareaModel, TareaEstados } from '../shared/tarea.model';
import { FormsModule } from '@angular/forms';

describe('EditTareaComponent', () => {
  let component: EditTareaComponent;
  let fixture: ComponentFixture<EditTareaComponent>;
  let tareaServiceSpy: jasmine.SpyObj<TareaService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    // Crear espías para TareaService y Router
    tareaServiceSpy = jasmine.createSpyObj('TareaService', ['getTarea', 'updateTarea', 'addTarea']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([]),FormsModule
      ],
      declarations: [EditTareaComponent],
      providers: [
        { provide: TareaService, useValue: tareaServiceSpy },
        { provide: Router, useValue: routerSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => key === 'id' ? '1' : null
            })
          }
        }
      ]
    }).compileComponents();
    const MOCK_TAREA = {
      _id: "1",
      nombre: "Ejemplo Tarea",
      cantidad: 5,
      descripcion: "Descripción",
      fecha: new Date(),
      estado: TareaEstados.Pago,
      valorUnitario: 100,
      valorTotal: 500
    };
    

    // Configurar el espía para devolver un objeto de tarea de ejemplo
    tareaServiceSpy.getTarea.and.returnValue(of(MOCK_TAREA));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTareaComponent);
    component = fixture.componentInstance;
  });

  it('debe inicializar tarea con datos de getTarea cuando hay un id en la ruta', fakeAsync(() => {
    fixture.detectChanges(); // Ejecuta el ciclo de cambio para inicializar el componente
    tick(); // Simula el paso del tiempo y completa la suscripción
    expect(component.tarea.nombre).toBe('Ejemplo Tarea');
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
