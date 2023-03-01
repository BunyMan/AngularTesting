import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
  <appServer></appServer>
  <h3> Teste com tags normais pelo meio </h3>
  <appServer></appServer>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
