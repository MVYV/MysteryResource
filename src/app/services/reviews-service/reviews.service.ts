import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewModel } from '../../shared/models/review.model';

@Injectable({
    providedIn: 'root'
})
export class ReviewsService {

    constructor(private http: HttpClient) {
    }

    public getReviews(): Observable<ReviewModel[]> {
        return this.http.get<ReviewModel[]>('https://cyberwe.herokuapp.com/review');
    }

    public getReviewById(reviewId: number): Observable<ReviewModel[]> {
        return this.http.get<ReviewModel[]>(`https://cyberwe.herokuapp.com/review/${ reviewId }`);
    }

    public getReviewByAuthor(reviewAuthor: string): Observable<ReviewModel[]> {
        return this.http.get<ReviewModel[]>(`https://cyberwe.herokuapp.com/review/author/${ reviewAuthor }`);
    }

    public getReviewByRating(reviewRating: number): Observable<ReviewModel[]> {
        return this.http.get<ReviewModel[]>(`https://cyberwe.herokuapp.com/review/rating/${ reviewRating }`);
    }

    public postReviews(review: ReviewModel): Observable<ReviewModel[]> {
        return this.http.post<ReviewModel[]>('https://cyberwe.herokuapp.com/review', review);
    }

    public deleteReview(reviewId: number): Observable<ReviewModel[]> {
        return this.http.delete<ReviewModel[]>(`https://cyberwe.herokuapp.com/review/${ reviewId }`);
    }
}
