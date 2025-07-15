import { Component } from '@angular/core';
import { GenericTableComponent } from '../../components/generic-table/generic-table.component';

@Component({
  selector: 'app-main-page',
  imports: [GenericTableComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  data: { title: string; description: string; creationDate: Date }[] = [
    {
      title: 'banana',
      description: 'banana description',
      creationDate: new Date(),
    },
    {
      title: 'banana',
      description: 'banana description',
      creationDate: new Date(),
    },
    {
      title: 'banana',
      description: 'banana description',
      creationDate: new Date(),
    },
    {
      title: 'banana',
      description: 'banana description',
      creationDate: new Date(),
    },
    {
      title: 'banana',
      description: 'banana description',
      creationDate: new Date(),
    },
  ];

  displayedColumns: Map<string, string> = new Map([
    ['title', 'Titolo'],
    ['description', 'Descrizione'],
    ['creationDate', 'Data di creazione'],
  ]);
}
