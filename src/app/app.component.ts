import { WebSocketService } from './web-socket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'frontend';

  constructor(private webSocketService: WebSocketService) {

  }

  ngOnInit(): void {
    // Escucha un evento de socket.io server
    this.webSocketService.listen("testEvent").subscribe((data) => {
      console.log(data)
    })
  }
  
  
}
