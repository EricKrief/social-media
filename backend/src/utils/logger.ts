import pino from 'pino';
import dayjs from 'dayjs';

const logger = pino({
  transport: {
    target: 'pino-pretty',
  },
  level: process.env.LOG_LEVEL,
  base: {
    pid: false
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default logger;