import dotenv from 'dotenv';

dotenv.config();

export const isLocalDevelopment = process.env.IS_LOCAL_DEVELOPMENT === 'true';
