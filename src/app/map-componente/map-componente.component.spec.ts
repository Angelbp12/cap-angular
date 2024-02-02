import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponenteComponent } from './map-componente.component';

describe('MapComponenteComponent', () => {
  let component: MapComponenteComponent;
  let fixture: ComponentFixture<MapComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
