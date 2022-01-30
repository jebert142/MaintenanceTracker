import { MaintenanceItem } from '../models/maintenanceItem'

class CarMaintenanceItems extends MaintenanceItem{
    modelName: string = "";
    brand: string = "";

    constructor(name: string, date: Date, model: string){
        super(name,date);
        this.modelName = model;
    }

    getInfo(){
        return this.modelName, this.brand;
        
    }
    
}