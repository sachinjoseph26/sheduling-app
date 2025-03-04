import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();
const configService = new ConfigService();

export default new DataSource({
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: ['dist/**/*.entity{.ts,.js}'],

    // We are using migrations, synchronize should be set to false.
    synchronize: false,
    migrationsRun: false,
    logging: true,

    // Update migration paths to include both src and dist
    migrations: [
        'src/database/*.ts',
        'dist/src/database/*.js'
    ],
    migrationsTableName: 'migrations'
});