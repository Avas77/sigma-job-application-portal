/* This code snippet is exporting an object named `ENV` with properties `DATABASE_NAME`, `USERNAME`,
`PASSWORD`, and `HOST_NAME`. The values of these properties are being assigned from the
corresponding environment variables `process.env.DATABASE_NAME`, `process.env.USERNAME`,
`process.env.PASSWORD`, and `process.env.HOST_NAME` respectively. */

export const ENV = {
  DATABASE_NAME: process.env.DATABASE_NAME,
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD,
  HOST_NAME: process.env.HOST_NAME,
};
