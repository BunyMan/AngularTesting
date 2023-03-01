import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `<appServer></appServer>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

}
