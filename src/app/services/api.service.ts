import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProdutoModel } from "../models/produto.model";

@Injectable()
export class ApiService {

    constructor(private httpClient : HttpClient) { }

    public getProdutos(): Observable<ProdutoModel[]> {

        const headers = new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiQWRyaWFubyIsInV1aWQiOiI3ZTk3NzlmNi0xNWRhLTQ0NTctYjdlZS1lMDI2MzI5Y2I2MDUiLCJ1c2VyX25hbWUiOiJhZHJpYW5vQGdtYWlsLmNvbSIsImp0aSI6IjhmOWRmNzM1LTEwNmEtNDA2NC1iZTViLWNmMWE4YWZmMmM3NyIsImNsaWVudF9pZCI6ImRlbGl2ZXJ5Iiwic2NvcGUiOlsiUkVBRCIsIldSSVRFIl19.BwR4Rk2S6YjJDnRjrYfA1QbUnZuPR606xMyFW6Hicdw"
        });

        return this.httpClient.get<ProdutoModel[]>("http://localhost:8080/produtos", { headers: headers });

    }

}
