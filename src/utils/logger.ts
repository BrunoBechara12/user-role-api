import pino from "pino";

export const logger = pino({
  redact: ["DB_URL"],
  level: "debug",
  transport: {
    target: "pino-pretty",
  },
});
