import { Component } from '@angular/core';
import { Agent } from 'src/app/model/agent';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styleUrls: ['./update-agent.component.css']
})
export class UpdateAgentComponent {

  constructor(private agentService:Service){}

  updateAgent(data:Agent){
        
    this.agentService.updateAgent(data)
    .subscribe((agent) => {console.log("updated agent is:"+agent);})
  }
}
