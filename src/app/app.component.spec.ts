import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
 
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),       
        
        HttpClientTestingModule // Añade HttpClientModule aquí
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: {
            params: of({ id: '1' }), // Mock de params, ajusta según sea necesario
            snapshot: {
              params: { id: '1' } // Mock de snapshot si se utiliza
            }
          }
        }
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title '071_ejMean'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('071_ejMean');
  });
  it('should create', () => {
    expect(AppComponent).toBeTruthy();
  });

 
});
