import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagresultComponent } from './tagresult.component';

describe('TagresultComponent', () => {
  let component: TagresultComponent;
  let fixture: ComponentFixture<TagresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
