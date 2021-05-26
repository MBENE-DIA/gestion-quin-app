import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeNewComponent } from './commande-new.component';

describe('CommandeNewComponent', () => {
  let component: CommandeNewComponent;
  let fixture: ComponentFixture<CommandeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
