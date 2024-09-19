/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "notes",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    await import("./infra/storage");
    await import("./infra/api");
  },
});

// let student = {
//   name: "paty",
//   age: 23,
//   async run() {
//     await import("./infra/storage");
//     await import("./infra/api");
//   }
// }


// async run() {
//   await import("./infra/storage");
//   await import("./infra/api");
// }

// const run = async () => {
//   await import("./infra/storage");
//   await import("./infra/api");
// }