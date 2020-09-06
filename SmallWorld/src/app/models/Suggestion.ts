export class HoursRange {
    StartHour: number;
    MaxHour: number;
}
export class AgeRange {
    MinAge: number;
    MaxAge: number;
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
    public Suggestion() {


    }
}

