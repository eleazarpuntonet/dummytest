import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(v: any): unknown {
    console.log(v)
    return `${v.country}, ${v.city}, ${v.state}, ${v.street}`;
  }

}
