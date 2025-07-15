import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { TableAction } from './table-types/TableAction';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { TableHeader } from './table-types/TableHeader';
import { MenuButtonComponent } from '../menu-button/menu-button.component';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-generic-table',
  imports: [
    MatTableModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MenuButtonComponent,
    MatTooltipModule,
  ],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
})
export class GenericTableComponent<T> {
  constructor() {}

  /**
   * La proprietà `data` contiene i dati da visualizzare nella tabella.
   * È un array di oggetti di tipo generico `T[]`, dove `T` è il tipo dei dati
   * che il componente si aspetta. Ogni elemento dell'array rappresenta una riga
   * della tabella.
   */
  @Input() data: T[] = [];

  /**
   * La proprietà `displayedColumns` è una mappa che associa le chiavi delle colonne
   * ai nomi visualizzati nell'intestazione della tabella.
   * La chiave della mappa è il nome della proprietà dell'oggetto da visualizzare,
   * mentre il valore è l'etichetta da mostrare nell'intestazione della tabella.
   */
  @Input() displayedColumns: Map<string, string> = new Map();

  /**
   * La proprietà `actions` è un array di oggetti `TableAction`, ognuno dei quali
   * definisce un'azione che può essere eseguita su una riga della tabella. Ogni
   * oggetto contiene un'etichetta (label), un'icona e una funzione `action` che
   * viene chiamata quando l'azione è eseguita.
   */
  @Input() actions?: TableAction<T>[] = [];

  /**
   * La proprietà `header` definisce un'intestazione opzionale da visualizzare sopra la tabella.
   * È di tipo `TableHeader` e consente di mostrare:
   *
   * - un titolo (`title`), visualizzato come intestazione principale,
   * - una serie di pulsanti (`buttons`), ognuno dei quali può eseguire una determinata azione.
   *
   * Ogni pulsante è definito dal tipo `TableHeaderActions` e include:
   * - un'etichetta (`label`): il testo visualizzato nel pulsante,
   * - una funzione (`action`): la callback invocata al click del pulsante. Accetta un numero variabile di argomenti di tipo `string`,
   * - una funzione (`showCondition`): restituisce un booleano che determina se il pulsante deve essere visualizzato o meno.
   *
   * In aggiunta, un pulsante può rappresentare un **menu a discesa**, se:
   * - `isMenu` è impostato a `true`: indica che il pulsante deve comportarsi come un menu,
   * - `menuItems` è valorizzato con un array di voci (`MenuItems`), ciascuna con:
   *   - un'etichetta (`label`): il testo della voce di menu,
   *   - una funzione (`action`): la callback eseguita al click della voce del menu.
   *
   * Se `header` è definito, viene mostrata una sezione sopra la tabella che include il titolo e i relativi pulsanti o menu.
   */
  @Input() header?: TableHeader;

  /**
   * Il getter `allColumns` restituisce un array di tutte le colonne da visualizzare
   * nella tabella, comprese le colonne definite in `displayedColumns` e la colonna
   * statica "actions" (per le azioni sui dati).
   * Questo array è utilizzato per configurare le righe della tabella.
   */
  get allColumns() {
    const columns = Array.from(this.displayedColumns.keys());
    if (this.actions && this.actions.length > 0) {
      columns.push('actions');
    }
    return columns;
  }
}
