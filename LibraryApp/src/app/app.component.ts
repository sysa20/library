import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'library';
  constructor(
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void { }

  onRouteActivate(event: any) {
    this.cdr.markForCheck();
  }
}
