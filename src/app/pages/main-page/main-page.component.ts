import { Component, OnInit } from '@angular/core';
import { GenericTableComponent } from '../../components/generic-table/generic-table.component';
import { TableHeader } from '../../components/generic-table/table-types/TableHeader';
import { NewRequestComponent } from '../../components/new-request/new-request.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RequestService } from '../../services/request.service';
import { firstValueFrom } from 'rxjs';
import { IRequest } from '../../types/Request';

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
export class MainPageComponent implements OnInit {
  data: IRequest[] = [];

  tableHeader: TableHeader = {
    title: 'Elenco richieste',
    buttons: [
      {
        label: 'Ricarica richieste',
        action: () => this.getRequests(),
        showCondition: () => true,
      },
    ],
  };

  displayedColumns: Map<string, string> = new Map([
    ['title', 'Titolo'],
    ['description', 'Descrizione'],
    ['creationDate', 'Data di creazione'],
  ]);

  constructor(private requestService: RequestService) {}

  async ngOnInit(): Promise<void> {
    this.getRequests();
  }

  async getRequests() {
    this.data = await firstValueFrom(this.requestService.getRequests());
  }

  async newRequest(req: IRequest) {
    await firstValueFrom(this.requestService.addRequest(req));
    await this.getRequests();
  }
}
