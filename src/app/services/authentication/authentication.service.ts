import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../shared/models/user.model';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient, private router: Router) { }

    public logIn(user: UserModel) {
        return this.http.post('https://cyberwe.herokuapp.com/authenticate', user, { observe: 'response' }).pipe(
            map((response: any) => {
                    if (response.status === 204) {
                        this.setToken(response.headers.get('Authorization'));
                    }
                    return response;
                }
            )
        );
    }

    public logOut() {
        localStorage.removeItem('authToken');
        this.router.navigate(['login']).then();
    }

    private getToken(): string {
        return localStorage.getItem('authToken');
    }

    private setToken(token): void {
        localStorage.setItem('authToken', token);
    }

    public getDecodedToken() {
        const token = this.getToken();
        if (!token) {
            return null;
        }
        const jwtHelper = new JwtHelperService();
        return jwtHelper.decodeToken(token);
    }

    private getRole() {
        if (this.isLoggedIn()) {
            return this.getDecodedToken().roles.authority;
        }
        return 'ROLE_ANONYMOUS';
    }

    public isAdmin() {
        return this.getRole() === 'ROLE_ADMIN';
    }

    public isAuthor() {
        return this.getRole() === 'ROLE_AUTHOR';
    }

    public isModerator() {
        return this.getRole() === 'ROLE_MODERATOR';
    }

    public isUser() {
        return this.getRole() === 'ROLE_USER';
    }

    public isLoggedIn() {
        return !!localStorage.getItem('authToken');
    }
}
