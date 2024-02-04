import { VerdaccioGitlabConfig } from "./gitlab";
declare function defaultStrategy(split_real_group: string[], split_package_name: string[]): boolean;
declare function nameMappingStrategy(splitRealGroup: string[], splitPackageName: string[], config: VerdaccioGitlabConfig): boolean;
declare const _default: {
    default: typeof defaultStrategy;
    nameMapping: typeof nameMappingStrategy;
};
export default _default;
