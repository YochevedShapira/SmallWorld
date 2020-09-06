export class User {
    UserID: number;
    UserPassword: string;
    UserName: string;
    UserStaus: Status;
    public User() {

    }
}
export enum Status {
    Traveler = 1,
    Host = 2,

}