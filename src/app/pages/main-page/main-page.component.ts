import { Component } from '@angular/core';
import { GenericTableComponent } from '../../components/generic-table/generic-table.component';
import { TableHeader } from '../../components/generic-table/table-types/TableHeader';
import { NewRequestComponent } from '../../components/new-request/new-request.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-main-page',
  imports: [
    GenericTableComponent,
    NewRequestComponent,
    NewRequestComponent,
    MatCardModule,
    MatDividerModule,
  ],
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

  tableHeader: TableHeader = {
    title: 'Elenco richieste',
    buttons: [
      {
        label: 'Ricarica richieste',
        action: () => console.log('banana'),
        showCondition: () => true,
      },
    ],
  };

  displayedColumns: Map<string, string> = new Map([
    ['title', 'Titolo'],
    ['description', 'Descrizione'],
    ['creationDate', 'Data di creazione'],
  ]);
}
