import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {DeliveryAddress} from '../../model/delivery-address';

@Component({
  selector: 'app-write-address',
  templateUrl: './write-address.component.html',
  styleUrls: ['./write-address.component.css']
})
export class WriteAddressComponent implements OnInit {

  public formGroup: FormGroup;
  public address: DeliveryAddress = new DeliveryAddress();

  constructor(public data: DataService) {
  }

  ngOnInit() {
  }

  addAddress() {
    alert('Saved');
    this.data.address = this.address;
  }

  mockAddress() {

  }
}
