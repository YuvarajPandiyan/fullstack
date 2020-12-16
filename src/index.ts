import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constance";
import { Post } from "./enties/Post";
import microConfig from "./mikro-orm.config";
const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();
  // const post = orm.em.create(Post, { title: "My 1st post in this" });
  // await orm.em.persistAndFlush(post);
  console.log(await orm.em.find(Post, {}));
};
main().catch((err) => {
  console.error(err);
});
