import * as dotenv from "dotenv";
import * as Koa from "koa";
import * as helmet from "koa-helmet";
import * as Router from "koa-router";

const app = new Koa();
const router = new Router();
dotenv.config();

import { Categories } from "./categories/categories";

router.get("/", async (ctx) => {
  const categories = new Categories();
  ctx.body = "zz";
});

app.use(helmet());
app.use(router.routes());
app.use(router.allowedMethods());

// tslint:disable-next-line:no-console
console.info(`Application is running on port ${process.env.PORT}`);
app.listen(process.env.PORT);
