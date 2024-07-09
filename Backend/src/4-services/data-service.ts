import { dal } from "../2-utils/dal";
import { OkPacketParams } from "mysql2";
import { furnitureModel } from "../3-models/furniture-model";

class DataService {

    



  // Get all furniture:

  public async getAllFurniture() {
    const sql = `
        SELECT 
            furniture.id,
            furniture.size,
            furniture.color,
            furniture.price,
            furnituretype.name as type
        FROM 
            furniture
        JOIN 
            furnituretype 
        ON 
            furniture.type = furnituretype.id;
    `;
    const furniture = await dal.execute(sql);
    return furniture;
}



  //add new furniture
  public async addFurniture(furniture: furnitureModel) {
    const sql = "insert into furniture values (default,?,?,?,?)";
    const values = [
    (furniture.type),
      furniture.size,
      furniture.color,
      furniture.price,
    ];
    const info: OkPacketParams = await dal.execute(sql, values);
    furniture.id = info.insertId;
    return furniture;
  };




public async getAllFurnitureType() {
    const sql= "select * from furnituretype";
    const allTypes= await dal.execute(sql);
    return allTypes;

}



}

export const dataService = new DataService();
