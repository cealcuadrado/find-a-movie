import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runtime'
})
export class RuntimePipe implements PipeTransform {

  transform(runtime: number | null, preface?: string): unknown {
    console.log(runtime);
    let runTimeStr: string = '';

    if (preface) {
      runTimeStr = runTimeStr.concat(preface);
    }

    if ((runtime == 0) || (runtime == null)) {
      runTimeStr = runTimeStr.concat('No runtime defined').toUpperCase();
    } else {
      if (Math.floor(runtime / 60) >= 1) {
        runTimeStr = runTimeStr.concat(`${Math.floor(runtime / 60)}h`);
        if (runtime % 60 > 0) {
          runTimeStr = runTimeStr.concat(` ${runtime % 60}min.`);
        }
      } else {
        runTimeStr = runTimeStr.concat(`${runtime % 60}min.`);
      }
    }

    return runTimeStr;
  }

}
