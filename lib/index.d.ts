import { PluginOptions } from '@verdaccio/types';
import VerdaccioGitLab from './gitlab';
import { VerdaccioGitlabConfig } from './gitlab';
export default function (config: VerdaccioGitlabConfig, options: PluginOptions<VerdaccioGitlabConfig>): VerdaccioGitLab;
