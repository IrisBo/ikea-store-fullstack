export class furnitureModel {
  public id: number;
  public type: number;
  public size: string;
  public color: string;
  public price: number;

  public constructor(furniture: furnitureModel) {
    this.id = furniture.id;
    this.type = furniture.type;
    this.size = furniture.size;
    this.color = furniture.color;
    this.price = furniture.price;
  }
}
