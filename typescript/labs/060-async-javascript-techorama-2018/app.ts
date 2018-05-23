import {MongoClient, MongoClientOptions} from 'mongodb';
import {Observable, of, range, interval, timer, throwError} from 'rxjs';
import {take, concat, map, merge, debounceTime} from 'rxjs/operators';

console.log('Lets get started');