import { BasketService } from './basket.service';
import { Controller, Get } from '@nestjs/common';

@Controller('/basket')
export class BasketController {
  constructor(private basketService: BasketService) {}

  // @Get()
  // getAll() {
  //   return this.basketService.getAll();
  // }
}
