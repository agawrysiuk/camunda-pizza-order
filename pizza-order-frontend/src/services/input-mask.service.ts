import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputMaskService {

  constructor() { }

  getMask(inputEnum: InputMaskEnum): any {
    switch (inputEnum) {
      case InputMaskEnum.PHONE: {
        return {mask: [ /[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/ ], guide: true, showMask: true};
      }
      case InputMaskEnum.ZIPCODE: {
        return {mask: [ /\d/, /\d/, '-', /\d/, /\d/, /\d/ ], guide: true, showMask: true};
      }
      default: {
        return {mask: false};
      }
    }
  }
}

export enum InputMaskEnum {
  PHONE,
  ZIPCODE
}

