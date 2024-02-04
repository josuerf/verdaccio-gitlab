import { Logger } from '@verdaccio/types';
export declare class AuthCache {
    private logger;
    private ttl;
    private storage;
    static get DEFAULT_TTL(): number;
    private static _generateKeyHash;
    constructor(logger: Logger, ttl?: number);
    findUser(username: string, password: string): UserData;
    storeUser(username: string, password: string, userData: UserData): boolean;
}
export declare type UserDataGroups = {
    publish: string[];
};
export declare class UserData {
    private _username;
    private _groups;
    get username(): string;
    get groups(): UserDataGroups;
    set groups(groups: UserDataGroups);
    constructor(username: string, groups: UserDataGroups);
}
