import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSyueComponent } from './ngx-syue.component';

describe('NgxSyueComponent', () => {
  let component: NgxSyueComponent;
  let fixture: ComponentFixture<NgxSyueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSyueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxSyueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
