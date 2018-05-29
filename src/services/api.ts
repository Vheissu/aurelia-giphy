import { singleton } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

const http = new HttpClient();

@singleton()
export class Api {

}
