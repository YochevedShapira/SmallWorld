import { Traveler } from './Traveler';
import { HoursRange } from './HoursRange';
import { AgeRange } from './AgeRange';

export class Request {
    RequestID: number;
    TravelerID: number;
    RangeHours?: HoursRange;
    RangeAge?: AgeRange;
    Country?: string;
    Street?: string;
    City?: string;
    servicesType: number[];
    Gender?: string;
    DateStart: Date;
    DateEnd: Date;
    public Request() {

    }
}