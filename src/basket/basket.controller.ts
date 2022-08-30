import { Controller } from '@nestjs/common';
import { BasketService } from './basket.service';

@Controller('/basket')
export class BasketController {
  constructor(private basketService: BasketService) {}

  // @Get()
  // getAll() {
  //   return this.basketService.getAll();
  // }
}
