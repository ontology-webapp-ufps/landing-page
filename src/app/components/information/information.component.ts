import { Component } from '@angular/core';
<<<<<<< HEAD
import { ProjectionSectionRs } from 'src/app/core/interface/project_section_rs.interface';
import { ParameterService } from 'src/app/core/services/parameters-service/parameter.service';
=======
import { Router } from '@angular/router';
>>>>>>> master

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {

<<<<<<< HEAD
  parameters: ProjectionSectionRs[] = [];

  constructor(private parameterService: ParameterService) {
    this.parameterService.getAboutProjectSection().subscribe((response) => {
      this.parameters = response;
    })
=======
  constructor(private router: Router) {}

  redirectLogin() {
    this.router.navigate(['auth']);
>>>>>>> master
  }

}
