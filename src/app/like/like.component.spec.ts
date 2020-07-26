import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeComponent } from './like.component';
import { DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";

describe('LikeComponent', () => {
  let component: LikeComponent;
  let fixture: ComponentFixture<LikeComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LikeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeComponent);
    component = fixture.componentInstance;
    component.id = 1;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })

  it("Likes should have a 0 value", () => {
    expect(component.getLikes()).toEqual(0);
  })

  it("Disikes should have a 0 value", () => {
    expect(component.getDislikes()).toEqual(0);
  })

  it("Likes should increment value", () => {
    component.upLikes();
    expect(component.getLikes()).toEqual(1);
  })

  it("Dislikes should increment value", () => {
    component.upDislikes();
    expect(component.getDislikes()).toEqual(1);
  })

  it("Component should have a span label with 0 value", () => {
    expect(debug.query(By.css("#likes1")).nativeElement.innerText).toBe("0");
  })
});
