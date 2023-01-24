import { Department } from "./department";
import { Employee } from "./employee";



export class Team {
	teamName = '';
        teamManager = '';	
	teamDept = {} as Department;
	employees = [] as Employee[];
}  