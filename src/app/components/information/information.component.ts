import { Component } from '@angular/core';
import { ProjectionSecionRs } from 'src/app/core/interface/project_section_rs.interface';
import { ParameterService } from 'src/app/core/services/parameters-service/parameter.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {

  parameters: ProjectionSecionRs[] = [];

  constructor(private parameterService: ParameterService) {
    this.parameterService.getAboutProjectSection().subscribe((response) => {
      this.parameters = response;
    })
  }

}
