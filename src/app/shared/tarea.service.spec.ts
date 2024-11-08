import { TestBed } from '@angular/core/testing';
import { TareaService } from './tarea.service';
import{HttpClientTestingModule} from '@angular/common/http/testing'

describe('TareaService', () => {
  let service: TareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      providers: [TareaService]
    });
    service = TestBed.inject(TareaService);
    
  });

  it('should  create', () => {
    expect(service).toBeTruthy();
  });

  // Aquí puedes añadir más pruebas para los métodos del servicio
});
