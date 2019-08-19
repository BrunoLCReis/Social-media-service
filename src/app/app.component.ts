import { Component, AfterViewInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'diplink';

  constructor(
    public http: HttpClient,
    ) {}

  public signUpPage = true;
  public loginPage = false;
  public feedPage = false;
  public inOrOut;
  public hiUser;
  public message;

  public token;
  public timeLine;

  public singing = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
  };

  public runIn = {
    username: '',
    password: '',
  };


  ngAfterViewInit() {
    // this.signUpPage = true;
  }

  public logout() {
    this.loginPage = true;
    this.signUpPage = false;
    this.feedPage = false;
    this.runIn.username = null;
    this.runIn.password = null;
    this.timeLine = null;
  }

  public loginPageUp() {
    this.loginPage = true;
    this.signUpPage = false;
    this.feedPage = false;
  }

  public signUp() {
    this.loginPage = true;
    this.signUpPage = false;
    const myBody = this.singing;
    this.signinUpUser(myBody).subscribe((response) => {
      console.log(response.body.first_name);
      response.body.first_name = this.hiUser;
    });
  }

  public login() {
    this.feedPage = true;
    this.signUpPage = false;
    this.loginPage = false;
    const comeIn = this.runIn;
    this.loginUser(comeIn).subscribe((userLog) => {
      this.token = userLog.body.token;
      console.log(this.token);
    });
  }

  public publish() {
    this.feedPage = true;
    this.signUpPage = false;
    const myPost = {
      id: Math.random,
      title: 'My Post Title',
      short_content: 'Request_Short_Content',
      content: this.message,
    };

    this.doingPost(myPost).subscribe((response) => {
      console.log(response);
    });
    this.message = '';
  }

  public getPostMessage() {
    this.getPost().subscribe((response) => {
      console.log(response.body);
      this.timeLine = response.body[Math.floor(Math.random() * ((39 - 1) + 1) + 2)].content;
    });
  }

  public signinUpUser(data): Observable<HttpResponse<any>> {
    return this.http.post(
        `https://sample-inflr.herokuapp.com/api/accounts/`, data,
        { observe: 'response', responseType: 'json' },
    );
  }

  public loginUser(data): Observable<HttpResponse<any>> {
    return this.http.post(
        `https://sample-inflr.herokuapp.com/api/accounts/login/`, data,
        { observe: 'response', responseType: 'json' },
    );
  }

  public doingPost(myPost): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set( 'Content-Type', 'application/json')
    .append('Authorization', 'Token '.concat(this.token));
    return this.http.post(
        `https://sample-inflr.herokuapp.com/api/articles/`, myPost,
          { headers, observe: 'response', responseType: 'json'},
        );
  }

  public getPost(): Observable<any> {
    return this.http.get(
      `https://sample-inflr.herokuapp.com/api/articles/`,
      { observe: 'response', responseType: 'json'},
    );
  }

}
