import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component : AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    component = new AppComponent();
  });

  it('El titulo de la pagina debe ser "myBank"', ()=> {
    let myVar : string = component.title;
    expect(myVar).toEqual('myBank');
  })
  
});
