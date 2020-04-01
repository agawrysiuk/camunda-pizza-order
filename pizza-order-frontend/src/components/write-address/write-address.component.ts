import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {DeliveryAddress} from '../../model/generated-dto';

@Component({
  selector: 'app-write-address',
  templateUrl: './write-address.component.html',
  styleUrls: ['./write-address.component.css']
})
export class WriteAddressComponent implements OnInit {

  public address: DeliveryAddress;

  constructor(private data: DataService,
              private router: Router) {
    this.address = this.data.variables.deliveryAddress;
  }

  ngOnInit() {
  }

  addAddress() {
    this.data.variables.deliveryAddress = this.address;
    document.getElementById('address-tab').className = 'calling-tab slide-out';
    setTimeout(() => {
        this.router.navigate(['thank-you']);
      }
      , 500);
  }

  mockAddress(addressForm: NgForm) {
    this.address.name = 'Krzysztof Krawczyk';
    this.address.phone = '000-000-000';
    this.address.street = 'ul. Jasna';
    this.address.building = '52';
    this.address.suite = '9';
    this.address.city = 'Warszawa';
    this.address.zipCode = '01-469';
    addressForm.form.markAllAsTouched();
  }
}
