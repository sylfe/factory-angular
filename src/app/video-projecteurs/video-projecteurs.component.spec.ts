import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoProjecteursComponent } from './video-projecteurs.component';

describe('VideoProjecteursComponent', () => {
  let component: VideoProjecteursComponent;
  let fixture: ComponentFixture<VideoProjecteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoProjecteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoProjecteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
