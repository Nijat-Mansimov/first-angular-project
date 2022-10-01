import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService:AlertifyService) { }
  title = "Product list"
  filterText = ""
  products:Product[] = [
    {id: 1, name: "Iphone", price: 2500, categoryID: 1, desc: "Iphone 14 Pro Max", "imgURL": "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {id: 2, name: "Samsung", price: 3500, categoryID: 2, desc: "Samsung Note 10 Plus", "imgURL": "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {id: 3, name: "Xiaomi", price: 4500, categoryID: 3, desc: "Xiaomi Mi A1", "imgURL": "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {id: 4, name: "Huawei", price: 5500, categoryID: 4, desc: "Huawei Note 11", "imgURL": "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
  ]
  
  ngOnInit(): void {
  }

  addToCart(product:Product){
    this.alertifyService.success(product.desc +  " added to basket")
  }

}
