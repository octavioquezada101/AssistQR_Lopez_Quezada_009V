import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoappPage } from './ingresoapp.page';

describe('IngresoappPage', () => {
  let component: IngresoappPage;
  let fixture: ComponentFixture<IngresoappPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresoappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

