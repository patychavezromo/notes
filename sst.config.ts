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
    const auth = await import("./infra/auth");

    return {
      UserPool: auth.userPool.id,
      Region: aws.getRegionOutput().name,
      IdentityPool: auth.identityPool.id,
      UserPoolClient: auth.userPoolClient.id,
    };
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