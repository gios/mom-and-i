import { knexQuery } from "../configs/database";
import { ICategories } from "./categories.model";

export const categoriesTypeDefs = `
  type Categories {
    id: Int!
    name: String!
    subcategories: [Subcategories!]
  }

  type Subcategories {
    id: Int!
    name: String!
  }

  type Query {
    categories: [Categories!]
  }

  schema {
    query: Query
  }
`;

export const categoriesResolves = {
  Categories: {
    async subcategories(obj: ICategories) {
      return await knexQuery.select("id", "name")
        .from("subcategories").where("category_id", obj.id);
    },
  },
  Query: {
    async categories() {
      return await knexQuery.select("id", "name").from("categories");
    },
  },
};
