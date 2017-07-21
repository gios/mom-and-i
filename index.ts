import * as dotenv from "dotenv";
import { graphiqlKoa, graphqlKoa } from "graphql-server-koa";
import { makeExecutableSchema } from "graphql-tools";
import * as Koa from "koa";
import * as bodyparser from "koa-bodyparser";
import * as helmet from "koa-helmet";
import * as Router from "koa-router";

const app = new Koa();
const router = new Router();
dotenv.config();

app.use(helmet());
app.use(bodyparser());

const typeDefs = [`
type Query {
  hello: String
}

schema {
  query: Query
}`];

const resolvers = {
  Query: {
    hello() {
      return "world";
    },
  },
};

const schema = makeExecutableSchema({typeDefs, resolvers});

router.get("/", async (ctx) => {
  ctx.body = "Mom and I";
});

router.post("/graphql", graphqlKoa({ schema }));
router.get("/graphiql", graphiqlKoa({ endpointURL: "/graphql" }));

app.use(router.routes());
app.use(router.allowedMethods());

// tslint:disable-next-line:no-console
console.info(`Application is running on port ${process.env.PORT}`);
app.listen(process.env.PORT);
