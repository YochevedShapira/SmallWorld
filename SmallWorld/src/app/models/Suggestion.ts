import { AgeRange } from './AgeRange';
import { HoursRange } from './HoursRange';
<<<<<<< HEAD
export class bookedDate {
    dateStart: Date;
    dateEnd: Date;
    public bookedDate() {
=======
import { bookedDate } from './bookedDate';
>>>>>>> b4215ca5b2bcd13dd7f99897624394f0fc05a4c6

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
<<<<<<< HEAD
=======

>>>>>>> b4215ca5b2bcd13dd7f99897624394f0fc05a4c6
    public Suggestion() {


    }
}

