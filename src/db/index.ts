import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

import { dbCredentialsString } from '../config';

// for migrations
const migrationClient = postgres(dbCredentialsString, { max: 1 });
migrate(drizzle(migrationClient), {migrationsFolder: './migrations'})

// for query purposes
const queryClient = postgres(dbCredentialsString);
export const db: PostgresJsDatabase = drizzle(queryClient);