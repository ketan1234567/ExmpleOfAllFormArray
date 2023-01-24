import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { Team } from '../form-builder/team';
import { ALL_SKILLS, ALL_TEAMS } from '../form-builder/team-data';



@Injectable({
  providedIn: 'root'
})
export class TeamManagementService {

  constructor() { }

  getSkills(){
    return of(ALL_SKILLS);
  }
  getAllTeams():Observable<Team[]>{
  return of(ALL_TEAMS);
  }
  getTeamByName(name:string):Observable<Team>{
    return this.getAllTeams().pipe(
			map(allTeams => allTeams.find(team => team.teamName === name) ?? new Team())
		);
  }
  saveTeam(team: Team) {
		console.log('------------TEAM------------');
		console.log('Team Name: ' + team.teamName);
		console.log('Team Manager: ' + team.teamManager);
		console.log('Dept Head: ' + team.teamDept.deptHead);
		console.log('Dept Name: ' + team.teamDept.deptName);
		console.log('----- Employee Detail -----');
		for (let emp of team.employees) {
			console.log('Emp Id: ' + emp.empId);
			console.log('Emp Name: ' + emp.empName);
			console.log('Emp Skill: ' + emp.skill);
			console.log('-------------------');
		}
}
}
