import { HOST } from "../../admin/config/config";
import adminImages from "../../admin/images/images";
import adminEndPoints from "../../admin/routes/adminEndPoints";
import adminLinks from "../../admin/routes/adminLinks";
import SiteImages from "../../site/images/images";
import appLinks from "../../site/routes/appLinks";
import * as adminGraphThreads from '../../graphql/threads';
import adminGraphPool from '../../graphql';

/**
 * Map Files maps cross configrurations to the application's 
 */
export const mappedLinks = {
    ...appLinks,
    ...adminLinks,
}

export const mappedImages = {
    ...adminImages,
    ...SiteImages,
}

export const mappedConfig = {
    HOST: HOST,
}

export const mappedEndPoints = {
    ...adminEndPoints,
}

export const mappedGraphThreads = {
    ...adminGraphThreads,
}

export const mappedGraphRequestPool = {
    ...adminGraphPool,
}
