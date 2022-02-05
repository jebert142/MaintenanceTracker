// Stateless export class to define all Maintenance Items. Has no executions within
// this code so that importing the class does not cause actions to be made.

export class MaintenanceItem{
    protected taskName: string;
    protected dateOfCreation: Date;
    varTest = undefined;

    constructor(name: string, date: Date){
        this.taskName = name;
        this.dateOfCreation = date;
    }
} 