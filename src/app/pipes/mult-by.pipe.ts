import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multBy'
})
export class MultByPipe implements PipeTransform {

  transform(num: number, mult: number = 2): number {
    return num * mult;
  }

}
