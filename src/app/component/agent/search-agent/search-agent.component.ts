import { Component } from '@angular/core';
import { Agent } from 'src/app/model/agent';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-search-agent',
  templateUrl: './search-agent.component.html',
  styleUrls: ['./search-agent.component.css']
})
export class SearchAgentComponent {

  agentSearchList:Agent[] =[];

  constructor(private agentService:Service){}

  getAgentById(agentId:number){
    
    console.log(agentId)

      this.agentService.getById(agentId).subscribe((a) => {console.log("agent obtained"+a)});
  }

  getAllAgents(){
    
    this.agentService.getAllAgents().subscribe( (agents)=> {this.agentSearchList = agents;console.log("list" + agents);
    
  });
  }
}
