import { TestBed,ComponentFixture } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';



describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component:AppComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),       
        
        // Añade HttpClientModule si es necesario, aquí
      ],
      declarations: [
        AppComponent
      ],
      providers: [
      
      ],
    }).compileComponents();
  });
  beforeEach(  ()=>{
   fixture= TestBed.createComponent(AppComponent);
   component=fixture.componentInstance;
  // fixture.detectChanges();

  });

  it('componente creado', () => {
    expect(component).toBeTruthy();
  });

  it(`Tengo este titulo '071_ejMean'`, () => {
    expect(component.title).toEqual('071_ejMean');
  });
 
});
