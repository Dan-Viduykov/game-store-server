import { Controller, Get } from '@nestjs/common';

@Controller('/basket')
export class BasketController {
  @Get()
  getAll() {
    return 'work basket';
  }
}
