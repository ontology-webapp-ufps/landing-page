import { Component } from '@angular/core';
import { Team } from 'src/app/core/interface/team.interface';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent {

  members : Team [] = [
    {
      name: 'Juan Camilo Hernández Parra',
      email: 'juancamilohp@ufps.edu.co',
      role: 'Tesista',
      img: 'https://media.licdn.com/dms/image/D4E03AQFhC_o0V8Vl0Q/profile-displayphoto-shrink_800_800/0/1665936899590?e=2147483647&v=beta&t=MEiK75HhIoTXizKgKtMT9dAcQdZsL28_BDzStOUY8BE'
    },
    {
      name: 'Jose Manolo Pinzon Hernandez',
      email: 'josemanoloph@ufps.edu.co',
      role: 'Tesista',
      img: 'https://media.licdn.com/dms/image/C4D03AQGqjXXvUzXjfw/profile-displayphoto-shrink_800_800/0/1590708714139?e=2147483647&v=beta&t=N7q7GkhTzP_P7qt5Jcm5S2AnsfoqftTxN1BrACq5HGg'
    },
    {
      name: 'Eduard Gilberto Puerto Cuadros',
      email: 'eduardpuerto@ufps.edu.co',
      role: 'Director',
      img: 'https://docentes.ufps.edu.co/public/imagenes/1f8e6f3c0f57d2003077f6222c0251bf936b1df76b6924143ea80f37ccaf8762.JPEG'
    },
  ]

}
