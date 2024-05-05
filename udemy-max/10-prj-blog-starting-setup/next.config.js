const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "madindo",
        mongodb_password: "bNZFoXjdmGmi2CrQ",
        mongodb_clustername: "testing",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "madindo",
      mongodb_password: "bNZFoXjdmGmi2CrQ",
      mongodb_clustername: "testing",
      mongodb_database: "my-site",
    },
  };
};