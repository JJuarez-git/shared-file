import { environment } from 'src/environments/environment';

export class ApiFetch {

    private static API_URL = environment.apiURL + environment.apiURI;

    constructor() { }

    static async get(url: string) {
        return await fetch(this.API_URL + url, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + sessionStorage.getItem('token')
            }
        })
    }

    static async post(url: string, body: any) {
        return await fetch(this.API_URL + url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + sessionStorage.getItem('token')
            },
            body: JSON.stringify(body)
        })
    }

    static async put(url: string, body?: any) {
        return await fetch(this.API_URL + url, {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + sessionStorage.getItem('token')
            },
            body: JSON.stringify(body)
        })
    }

    static async delete(url: string, body?: any) {
        return await fetch(this.API_URL + url, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + sessionStorage.getItem('token')
            },
            body: JSON.stringify(body)
        })
    }
}