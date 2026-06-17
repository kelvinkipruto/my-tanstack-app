import { neon } from '@neondatabase/serverless'
import { drizzle as drizzleNeon } from 'drizzle-orm/neon-http'
import { drizzle as drizzleNode } from 'drizzle-orm/node-postgres'
import pg from 'pg'

import * as schema from './schema.ts'

export const db = process.env.DATABASE_URL?.includes('neon.tech')
  ? drizzleNeon(neon(process.env.DATABASE_URL!), { schema })
  : drizzleNode(new pg.Pool({ connectionString: process.env.DATABASE_URL }), { schema })
