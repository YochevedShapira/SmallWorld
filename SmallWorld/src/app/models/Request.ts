import { Traveler } from './Traveler';
import { HoursRange } from './Suggestion';

export class Request {
    RequestID: number;
    TravelerID: number;
    RangeHours?: HoursRange;
    Country?: string;
    Street?: string;
    City?: string;
    servicesType: number[];
    public Request() {

    }
}