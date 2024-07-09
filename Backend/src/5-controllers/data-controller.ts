import express, { NextFunction, Request, Response } from "express";
import { dataService } from "../4-services/data-service";
import { furnitureModel } from "../3-models/furniture-model";
import { StatusCode } from "../3-models/enums";

// Data controller:
class DataController {

    // Create a router object for listening to HTTP requests:
    public readonly router = express.Router();

    // Register routes once: 
    public constructor() {
        this.registerRoutes();
    }

    // Register routes:
    private registerRoutes(): void {
        this.router.get("/furniture", this.getAllFurniture);
        this.router.post("/furniture", this.addFurniture);
        this.router.get("/types", this.getAllFurnitureType);
        
        
    }

    // GET http://localhost:4000/api/___

   


    private async getAllFurniture(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const furniture= await dataService.getAllFurniture();
            response.json(furniture)
        }
        catch (err: any) { next(err); }
    }


    private async addFurniture(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const furniture= new furnitureModel(request.body);
            const addedFurniture= await dataService.addFurniture(furniture);
            response.status(StatusCode.Created).json(addedFurniture);
        }
        catch (err: any) { next(err); }
    }

    
    private async getAllFurnitureType(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const allTypes= await dataService.getAllFurnitureType();
            response.json(allTypes)
        }
        catch (err: any) { next(err); }
    }

}

const dataController = new DataController();
export const dataRouter = dataController.router;
