import { Module } from '@nestjs/common';
import { CatsController } from './cat.controller';
import { CatService } from './cat.service';

@Module({
    providers: [CatService],
    controllers: [CatsController],
})
export class CatModule {}
