import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTareaComponent } from './edit-tarea.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('EditTareaComponent', () => {
  let component: EditTareaComponent;
  let fixture: ComponentFixture<EditTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTareaComponent],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: {
            params: of({ id: '1' }), // Simular parámetros de ruta
            snapshot: {
              params: { id: '1' }
            }
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
