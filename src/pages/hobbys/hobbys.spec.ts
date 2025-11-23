import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hobbys } from './hobbys';

describe('Hobbys', () => {
  let component: Hobbys;
  let fixture: ComponentFixture<Hobbys>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hobbys]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hobbys);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
