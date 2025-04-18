import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMembersComponent } from './board-members.component';

describe('BoardMembersComponent', () => {
  let component: BoardMembersComponent;
  let fixture: ComponentFixture<BoardMembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardMembersComponent]
    });
    fixture = TestBed.createComponent(BoardMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
