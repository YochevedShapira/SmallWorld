import { AgeRange } from './AgeRange';
import { HoursRange } from './HoursRange';
export class bookedDate {
    dateStart: Date;
    dateEnd: Date;
    public bookedDate() {

    }
}

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
    bookedDates: bookedDate[];
    public Suggestion() {


    }
}

