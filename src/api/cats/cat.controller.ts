import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './cat.dto';

@Controller('cats') //路由路径前缀设置为 cats
export class CatsController {
    constructor(private readonly catService: CatService) {}

    @Get('/cat') //路由 /cats/cat
    findAll(): string {
        console.log('object');
        return this.catService.getCats();
    }

    @Post('/createCat')
    async create(@Body() createCatDto: CreateCatDto): Promise<string> {
        return createCatDto.name;
    }
}
