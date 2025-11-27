import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamGameComponent } from './steam-game-component';

describe('SteamGameComponent', () => {
  let component: SteamGameComponent;
  let fixture: ComponentFixture<SteamGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteamGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteamGameComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
