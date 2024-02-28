import { Component } from '@angular/core';
import { Agent } from 'src/app/model/agent';

import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent {

  constructor(private agentService: Service) { }

  addAgent(data: Agent) {
    console.log(data);
    this.agentService.insertAgent(data);

  }
}
