// types
import { IModel } from "~/types";

// store
import initialState from "../store/initialState";

export default defineEventHandler(async (event) => {
  const { customer_id, server_name, server_type } = await readBody(event);
  const storage = useStorage();

  const models: IModel[] = (await storage.getItem("models")) ?? initialState;

  const newModels = models.map((item) => {
    if (item.customer_id === customer_id) {
      if (server_name) item.server_name = server_name;
      if (server_type) item.server_type = server_type;
    }

    return item;
  });

  await storage.setItem("models", newModels);

  console.log(models);

  return models;
});
