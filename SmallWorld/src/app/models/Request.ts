import { Traveler } from './Traveler';
import { HoursRange } from './HoursRange';
import { AgeRange } from './AgeRange';

export class Request {
    RequestID: number;
    TravelerID: number;
    HoursRange?: HoursRange;
    AgeRange?: AgeRange;
    Country?: string;
    Street?: string;
    City?: string;
    ServicesTypes: number[];
    Gender?: string;
    DateStart: Date;
    DateEnd: Date;
    public Request() {

    }
}