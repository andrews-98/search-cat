import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CatData } from '../interfaces/cat-interface';

@Injectable({
    providedIn: 'root'
})

export class CatDataService {



    constructor(private http: HttpClient) { }

    getAllCats(amount: string): Observable<CatData[]> {
        return this.http.get<CatData[]>(environment.CatDataBaseUrl, {
            headers: new HttpHeaders()
                .set(environment.XAPIKeyHeaderName, environment.XAPIKeyHeaderValue),
            params: new HttpParams()
                .set('limit', amount)
        })
    }

    getListofBreeds(): Observable<CatData[]> {
        return this.http.get<CatData[]>(environment.ListBreedsDataUrl)
    }

    getCatBySelectedBreed(id: string, amount: string): Observable<CatData[]> {
            return this.http.get<CatData[]>(environment.SearchSelectedBreedDataUrl, {
                headers: new HttpHeaders()
                    .set(environment.XAPIKeyHeaderName, environment.XAPIKeyHeaderValue),
                params: new HttpParams()
                    .set('breed_ids', id)
                    .set('limit', amount)
            })
        
       
    }


}