import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(
		private HttpClient: HttpClient
	) {
	}

	getData() {
		return this.HttpClient.get(`${environment.url_base}`);
	}
}
