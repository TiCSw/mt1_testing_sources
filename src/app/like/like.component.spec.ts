import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeComponent } from './like.component';
import { DebugElement } from '@angular/core';

describe('LikeComponent', () => {
  let component: LikeComponent;
  let fixture: ComponentFixture<LikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LikeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })

  it("Likes should have a 0 value", () => {
    expect(component.getLikes()).toEqual(0);
  })

  it("Likes should increment value", () => {
    component.upLikes();
    expect(component.getLikes()).toEqual(1);
  })

  it("Likes should decrement value", () => {
    component.downLikes();
    expect(component.getLikes()).toEqual(-1);
  })

});
