import { Pipe, PipeTransform } from '@angular/core';
import { CastCredit } from 'src/app/shared/interfaces/cast-credit';

@Pipe({
  name: 'filterCast'
})
export class FilterCastPipe implements PipeTransform {

  transform(value: CastCredit[], args: string): CastCredit[] {
    if (!value) {
      return [];
    }

    if (!args) {
      return value;
    }

    return value.filter(data => {
      return JSON.stringify(data).toLowerCase().includes(args);
    });
  }

}
