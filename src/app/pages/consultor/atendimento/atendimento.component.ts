import { Component } from '@angular/core';
import { FilaComponent } from './components/fila/fila.component';
import { ChatComponent } from './components/chat/chat.component';

@Component({
  selector: 'app-atendimento',
  standalone: true,
  imports: [FilaComponent, ChatComponent],
  templateUrl: './atendimento.component.html',
  styleUrl: './atendimento.component.scss'
})
export class AtendimentoComponent {

}
