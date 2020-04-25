import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {DeliveryAddress, Step} from '../../model/generated-dto';
import {ViewResolverService} from '../../services/view-resolver.service';
import {ProcessManagerService} from '../../services/process-manager.service';
import {InputMaskEnum, InputMaskService} from '../../services/input-mask.service';

@Component({
  selector: 'app-write-address',
  templateUrl: './write-address.component.html',
  styleUrls: ['./write-address.component.css']
})
export class WriteAddressComponent implements OnInit {

  address: DeliveryAddress;
  inputMaskEnum: typeof InputMaskEnum = InputMaskEnum;
  validAddress: boolean = false;
  public literals: {[index: string]: string};

  constructor(private data: DataService,
              private router: Router,
              private viewResolver: ViewResolverService,
              private manager: ProcessManagerService,
              private inputMaskService: InputMaskService) {
    this.viewResolver.checkStep();
    this.address = this.data.variables.deliveryAddress;
    this.literals = this.data.getLiteralsForStep(Step.WRITE_ADDRESS);
  }

  ngOnInit() {
  }

  addAddress() {
    this.data.variables.deliveryAddress = this.address;
    this.validAddress = true;
    setTimeout(() => {
        this.manager.finishStep();
      }
      , 500);
  }

  mockAddress(addressForm: NgForm) {
    this.address.name = 'Krzysztof Krawczyk';
    this.address.phone = '123-123-123';
    this.address.street = 'ul. Jasna';
    this.address.building = '52';
    this.address.suite = '9';
    this.address.city = 'Warszawa';
    this.address.zipCode = '01-469';
    addressForm.form.markAllAsTouched();
  }

  public getMask(inputEnum: InputMaskEnum): any {
    return this.inputMaskService.getMask(inputEnum);
  }
}
