import { Pipe, PipeTransform } from '@angular/core';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({name: 'statusFilter'})
export class StatusFilter {
  transform(value: boolean): string {

    return value === true ? 'Kích hoạt' : 'Khóa';
  }
}
