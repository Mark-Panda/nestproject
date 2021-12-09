import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatModule } from './api/cats/cat.module';

const environment = process.env.NODE_ENV || 'development';

@Module({
    imports: [
        CatModule,
        ConfigModule.forRoot({
            envFilePath: `.env.${environment}`,
            isGlobal: true,
        }),
    ],
})
export class AppModule {}
