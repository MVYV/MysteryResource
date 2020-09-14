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

    public getDecodedToken(): any {
        const token = this.getToken();
        if (!token) {
            return null;
        }
        const jwtHelper = new JwtHelperService();
        return jwtHelper.decodeToken(token);
    }

    private getRole(): string {
        if (!this.isLoggedIn()) {
            return 'ROLE_ANONYMOUS';
        }
        return this.getDecodedToken().roles[0].authority;
    }

    public isAdmin(): boolean {
        return this.getRole() === 'ROLE_ADMIN';
    }

    public isAuthor(): boolean {
        return this.getRole() === 'ROLE_AUTHOR';
    }

    public isModerator(): boolean {
        return this.getRole() === 'ROLE_MODERATOR';
    }

    public isUser(): boolean {
        return this.getRole() === 'ROLE_USER';
    }

    public isLoggedIn(): boolean {
        return !!localStorage.getItem('authToken');
    }
}
