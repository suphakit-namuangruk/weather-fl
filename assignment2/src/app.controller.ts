import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':postcode')
  async getWeather(@Param('postcode') postcode: string) {
    return this.appService.getWeather(postcode);
  }
}
