import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewplacePage } from './newplace.page';

describe('NewplacePage', () => {
  let component: NewplacePage;
  let fixture: ComponentFixture<NewplacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewplacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewplacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
