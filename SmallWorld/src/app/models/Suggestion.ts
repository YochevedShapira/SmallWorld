import { AgeRange } from './AgeRange';
import { HoursRange } from './HoursRange';


export class Suggestion {
    SuggestionID: number;
    HostId: number;
    Title: number;
    Description: string;
    RangeAge?: AgeRange;
    RangeHours?: HoursRange;
    Gender?: string;
    Country?: string;
    Street?: string;
    City?: string;
    servicesType: number[];

    public Suggestion() {


    }
}

