import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, flag: boolean): string {
    let result = "";
    if (flag) {
      for (var i = value.length - 1; i >= 0; i--) {
        result += value.charAt(i);
      }
    } else {
      result = value;
    }
    return result;
  }

}
