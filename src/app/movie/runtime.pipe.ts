import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runtime'
})
export class RuntimePipe implements PipeTransform {

  transform(runtime: number | null): unknown {
    console.log(runtime);
    if (runtime == null) {
      return '';
    } else {
      if (Math.floor(runtime / 60) >= 1) {
        return `| ${Math.floor(runtime / 60)}h ${runtime % 60}min.`
      } else {
        return `| ${runtime % 60}min`
      }
    }
  }

}
