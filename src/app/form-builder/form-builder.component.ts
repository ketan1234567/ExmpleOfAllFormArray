import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { TeamManagementService } from '../services/team-management.service';
import { Department } from './department';
import { Employee } from './employee';
import { Team } from './team';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
     teamForm={} as FormGroup;
     formSumitted=false;
     allSkills=of([]as any)
	 flag =true;
	 isReq=true;
	 result=40;
	 website={
		name:'ketan'
	 }	

     constructor(private formbuilder:FormBuilder,private teamMngservices:TeamManagementService){

     }


  ngOnInit() {
    this.allSkills=this.teamMngservices.getSkills();
    this.createTeamForm();
    this.addEmployee();

  }
  createTeamForm() {
		this.teamForm = this.formbuilder.group({
			teamName: ['', Validators.required],
			teamManager: '',
			teamDept: this.formbuilder.group(new Department()),
			employees: this.formbuilder.array([])
		});
	}
  get empFormArray(): FormArray {
		return this.teamForm.get('employees') as FormArray;
	}
	addEmployee() {
		let fg = this.formbuilder.group(new Employee());
		this.empFormArray.push(fg);
	}
	deleteEmployee(idx: number) {
		this.empFormArray.removeAt(idx);
	}
	loadTeam(name: string) {
		this.teamMngservices.getTeamByName(name)
			.subscribe(team => {
				this.createFormWithDefaultData(team);
			});
	}
	createFormWithDefaultData(team: Team) {
		//this.teamForm.patchValue(team); 
		this.teamForm.patchValue({
			teamName: team.teamName,
			teamManager: team.teamManager,
			teamDept: team.teamDept
		});
		let employeeFormGroups = team.employees.map((employee: any) => this.formbuilder.group(employee));
		let employeeFormArray = this.formbuilder.array(employeeFormGroups);
		this.teamForm.setControl('employees', employeeFormArray);
	}
	onFormSubmit() {
		let data = JSON.stringify(this.teamForm.value);
		console.log('-----Team in JSON Format-----');
		console.log(data);
		let team: Team = this.teamForm.value;
		this.teamMngservices.saveTeam(team);
		this.formSumitted = true;
		this.teamForm.reset();
	}
	resetTeamForm() {
		this.teamForm.reset({
			teamName: 'Java Team',
			teamManager: 'Yogi'
		});
	}

}
