import { Callback, IPluginAuth, PluginOptions, RemoteUser, PackageAccess } from '@verdaccio/types';
export declare type VerdaccioGitlabAccessLevel = '$guest' | '$reporter' | '$developer' | '$maintainer' | '$owner';
export declare type VerdaccioGitlabNameMapping = {
    gitlabName: string;
    packageJsonName: string;
};
export declare type VerdaccioGitLabStrategy = {
    caseSensitive?: boolean;
    searchPath?: string;
    mappings?: VerdaccioGitlabNameMapping[];
};
export declare type VerdaccioGitlabConfig = {
    url: string;
    authCache?: {
        enabled?: boolean;
        ttl?: number;
    };
    publish?: VerdaccioGitlabAccessLevel;
    groupsStrategy?: VerdaccioGitLabStrategy;
    projectsStrategy?: VerdaccioGitLabStrategy;
    groupSearchStrategy?: 'default' | 'nameMapping';
};
export interface VerdaccioGitlabPackageAccess extends PackageAccess {
    name?: string;
    gitlab?: boolean;
}
export default class VerdaccioGitLab implements IPluginAuth<VerdaccioGitlabConfig> {
    private options;
    private config;
    private authCache?;
    private logger;
    private publishLevel;
    constructor(config: VerdaccioGitlabConfig, options: PluginOptions<VerdaccioGitlabConfig>);
    authenticate(user: string, password: string, cb: Callback): any;
    adduser(user: string, password: string, cb: Callback): any;
    changePassword(user: string, password: string, newPassword: string, cb: Callback): any;
    allow_access(user: RemoteUser, _package: VerdaccioGitlabPackageAccess & PackageAccess, cb: Callback): any;
    allow_publish(user: RemoteUser, _package: VerdaccioGitlabPackageAccess & PackageAccess, cb: Callback): any;
    private _matchGroupWithPackage;
    private _getCachedUserGroups;
    private _setCachedUserGroups;
}
