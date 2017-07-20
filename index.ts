import * as dotenv from "dotenv";
// import { graphqlKoa } from "graphql-server-koa";
import * as Koa from "koa";
import * as bodyparser from "koa-bodyparser";
import * as helmet from "koa-helmet";
import * as Router from "koa-router";

const app = new Koa();
const router = new Router();
dotenv.config();

import { Categories } from "./categories/categories";

app.use(helmet());
app.use(bodyparser());

router.get("/", async (ctx) => {
  const categories = new Categories();
  ctx.body = await categories.getAllCategories();
});

// router.post("/graphql", graphqlKoa({ schema: MySchema }))

app.use(router.routes());
app.use(router.allowedMethods());

// tslint:disable-next-line:no-console
console.info(`Application is running on port ${process.env.PORT}`);
app.listen(process.env.PORT);
