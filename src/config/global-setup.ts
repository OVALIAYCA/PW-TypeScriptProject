import { FullConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';


export default async function globalSetup(config: FullConfig) {
  dotenv.config({ path: path.resolve(__dirname, '../../.env') });
  //
  //
  //
  console.log('Global setup completed.');
}