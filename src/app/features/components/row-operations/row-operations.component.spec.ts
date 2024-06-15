import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowOperationsComponent } from './row-operations.component';

describe('RowOperationsComponent', () => {
  let component: RowOperationsComponent;
  let fixture: ComponentFixture<RowOperationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowOperationsComponent]
    });
    fixture = TestBed.createComponent(RowOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
