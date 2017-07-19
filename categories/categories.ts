import { knexQuery } from "../configs/database";

export class Categories {

  public async getAllCategories() {
    return knexQuery.select("name").from("categories");
  }
}
