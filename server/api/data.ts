export default eventHandler(async (event) => {
  const storage = useStorage();

  storage.setItem("models", [
    {
      customer_id: "user1",
      server_name: "server7",
      server_type: "vds",
    },
    {
      customer_id: "user5",
      server_name: "server2",
      server_type: "dedicated",
    },
    {
      customer_id: "user3",
      server_name: "server4",
      server_type: "hosting",
    },
  ]);

  return await storage.getItem("models");
});
