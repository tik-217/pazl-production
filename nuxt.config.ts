// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@ant-design-vue/nuxt"],
  nitro: {
    storage: {
      redis: {
        driver: "redis",
        port: 6379,
        host: "127.0.0.1",
        username: "",
        password: "",
        db: 0,
        tls: {},
      },
    },
  },
  devtools: { enabled: false },
});
