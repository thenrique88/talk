import { Component, ViewEncapsulation } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import { ItemFilaComponent } from '../item-fila/item-fila.component';

@Component({
  selector: 'app-fila',
  standalone: true,
  imports: [ItemFilaComponent, MatTabsModule, MatIconModule, MatInputModule, MatFormFieldModule, MatExpansionModule],
  templateUrl: './fila.component.html',
  styleUrl: './fila.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FilaComponent {
  panelOpenState = false;
}
