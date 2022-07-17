import { Pool } from 'pg';
import connectionString from './config';

const db = new Pool({ connectionString });

export default db;