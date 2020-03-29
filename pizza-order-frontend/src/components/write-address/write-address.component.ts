import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {DeliveryAddress} from '../../model/delivery-address';
import {Router} from '@angular/router';

@Component({
  selector: 'app-write-address',
  templateUrl: './write-address.component.html',
  styleUrls: ['./write-address.component.css']
})
export class WriteAddressComponent implements OnInit {

  public address: DeliveryAddress = new DeliveryAddress();

  constructor(private data: DataService,
              private router: Router) {
  }

  ngOnInit() {
  }

  addAddress() {
    this.data.address = this.address;
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
