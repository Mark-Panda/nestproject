import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
    getCats(): string {
        return '所有的猫';
    }
}
