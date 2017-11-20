import { Component, OnInit } from '@angular/core';

import * as Stomp from 'stompjs';

@Component({
  selector: 'app-mq-button',
  templateUrl: './mq-button.component.html',
  styleUrls: ['./mq-button.component.css']
})
export class MqButtonComponent implements OnInit {

  private client: Stomp.Client;

  private url: string = 'ws://localhost:15674/ws';

  constructor() { }

  ngOnInit() {
 	  this.client = Stomp.client(this.url);
 	  this.client.connect('guest', 'guest', this.on_connect, this.on_error);
  }

  ngOnDestroy() {
    this.client.disconnect();
  }

  public onClick() {
    this.client.send('/queue/angularstomp', {}, JSON.stringify({
    	key1: 'value1',
    	key2: 'value2'
    }));
  }

  private on_connect = () => {
  	console.log('connected');
  }

  private on_error = () => {
  	console.log('error');
  }

}
