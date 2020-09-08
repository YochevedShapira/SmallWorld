import { Traveler } from './Traveler';
import { HoursRange } from './HoursRange';

export class Request {
    RequestID: number;
    TravelerID: number;
    RangeHours?: HoursRange;
    Country?: string;
    Street?: string;
    City?: string;
    servicesType: number[];
    DateStart: Date;
    DateEnd: Date;
    public Request() {

    }
}