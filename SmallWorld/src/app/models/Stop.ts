import { LocationHost } from './LocationHost';
import { ServiceType } from './ServiceType';
import { Address } from './Address';

export class Stop {
    StopID: number;
    StopLocation: number;
    RequestId: number;
    HostLocationId: number;
    StartDate: Date;
    EndDate: Date;
    ServiceTypeId: number;
    Address: Address;
    LocationHost: LocationHost;
    Request: Request;
    ServiceType: ServiceType;
    public Stop() {

    }
}