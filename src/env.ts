const env = {};

// verify all values in env are defined if not throw an error
// Object.entries(env).forEach(([key, value]) => {
//   if (value === undefined) {
//     throw new Error(`Environment variable ${key} is not defined`);
//   }
// });

export { env };
