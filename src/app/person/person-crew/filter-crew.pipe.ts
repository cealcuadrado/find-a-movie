import { Pipe, PipeTransform } from '@angular/core';
import { CrewCredit } from 'src/app/shared/interfaces/crew-credit';

@Pipe({
  name: 'filterCrew'
})
export class FilterCrewPipe implements PipeTransform {

  transform(value: CrewCredit[], args?: string): CrewCredit[] {
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
