import * as Koa from "koa";
import * as dotenv from "dotenv";

const app = new Koa();
dotenv.config();

app.use(ctx => {
  ctx.body = 'Hello Mom and I';
});

console.info(`Application is running on port ${process.env.PORT}`);
app.listen(process.env.PORT);
