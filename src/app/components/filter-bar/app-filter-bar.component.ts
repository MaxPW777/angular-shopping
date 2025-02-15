import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-filter-bar',
  imports: [
    FormsModule
  ],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent {
  @Output() filterChange = new EventEmitter<{
    selectedType: string;
    searchTerm: string;
    sortBy: string;
  }>();

  types: string[] = [
    'Grass',
    'Fire',
    'Lightning',
  ];

  selectedType: string = '';
  searchTerm: string = '';
  sortBy: string = '';

  public emitChange(): void {
    this.filterChange.emit({
      selectedType: this.selectedType,
      searchTerm: this.searchTerm,
      sortBy: this.sortBy,
    });
  }
}
