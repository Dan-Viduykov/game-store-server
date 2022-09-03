import { ObjectId } from 'mongoose';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { BasketService } from './basket.service';

@Controller('/basket')
export class BasketController {
  constructor(private basketService: BasketService) {}

  @Get()
  getAll() {
    return this.basketService.getAll();
  }

  @Post()
  addGame(@Body() id: ObjectId) {
    return this.basketService.addGame(id);
  }
}
