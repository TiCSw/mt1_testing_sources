import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Determinar el valor de una variable en el componente
  it("Should have a message", () => {
    expect(component.message).toContain("Users list")
  })

  it("Should have a message2", () => {
    expect(component.getData()).toBe(10);
  })

  //Determinar la existencia de una etiqueta con un valor específico
  it("Should have an h1 tag", () => {
    expect(debug.query(By.css("h1")).nativeElement.innerText).toBe("Home component");
  })
});
