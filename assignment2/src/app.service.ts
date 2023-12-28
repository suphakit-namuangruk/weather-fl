import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  // Wather API Key 65c30b3194d7c141789fc9f4789c59e2
  private readonly apiKey = '65c30b3194d7c141789fc9f4789c59e2';

  async getWeather(postcode: string) {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${postcode},th&appid=${this.apiKey}&units=metric`,
      );
      return res.data;
    } catch (error) {
      throw new Error('Can not fatch weather data !');
      console.log('Something went worng', error);
    }
  }
}
