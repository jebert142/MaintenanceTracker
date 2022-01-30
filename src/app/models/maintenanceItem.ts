export class MaintenanceItem{
    protected taskName: string;
    protected dateOfCreation: Date;


    constructor(name: string, date: Date){
        this.taskName = name;
        this.dateOfCreation = date;
    }
}