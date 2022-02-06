import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {
  @Input()
  backPage: string;

  constructor(
    protected router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  back(): void {
    this.router.navigate([this.backPage], {
      // relativeTo: this.route.parent.parent,
    });
  }

}
