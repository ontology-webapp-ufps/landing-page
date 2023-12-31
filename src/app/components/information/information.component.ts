import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {

  constructor(private router: Router) {}

  redirectLogin() {
    this.router.navigate(['auth']);
  }

}
