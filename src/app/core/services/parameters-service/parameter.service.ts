import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { MainSectionRs } from '../../interface/main_section_rs.interface';
import { ProjectionSecionRs } from '../../interface/project_section_rs.interface';
import { TeamSectionRs } from '../../interface/team_section_rs.interface';

@Injectable({
  providedIn: 'root',
})
export class ParameterService {
  private SERVICE_URL: string;

  constructor(private http: HttpClient) {
    this.SERVICE_URL = environment.parameters_service
  }

  getMainSection(): Observable<MainSectionRs[]> {
    const serviceUrl = this.SERVICE_URL + '/main_section';
    return this.http.get<MainSectionRs[]>(serviceUrl);
  }

  getAboutProjectSection(): Observable<ProjectionSecionRs[]> {
    const serviceUrl = this.SERVICE_URL + '/project_section';
    return this.http.get<ProjectionSecionRs[]>(serviceUrl);
  }

  getOurTeamSection(): Observable<TeamSectionRs[]> {
    const serviceUrl = this.SERVICE_URL + '/team_section';
    return this.http.get<TeamSectionRs[]>(serviceUrl);
  }

}
