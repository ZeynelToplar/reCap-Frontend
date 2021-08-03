import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl:string="https://localhost:44394/api/";


  constructor(private httpClient:HttpClient) { }

  getCarImageByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carimage/getallimagebycarid?id="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarDetail(carId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetailbyid?id=" + carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
