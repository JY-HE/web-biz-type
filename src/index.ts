export * from './types/aggsBizTypes';
export * from './types/alarmBizTypes';
export * from './types/alertsPlatformBizTypes';
export * from './types/assetBizTypes';
export * from './types/auditBizTypes';
export * from './types/authBizTypes';
export * from './types/cgsBizTypes';
export * from './types/dcsBizTypes';
export * from './types/edmsBizTypes';
export * from './types/eventBizTypes';
export * from './types/fileStorageBizTypes';
export * from './types/gcsBizTypes';
export * from './types/geoAnalysisBizTypes';
export * from './types/geoDataBizTypes';
export * from './types/mmtBizTypes';
export * from './types/modelAnalysisBizTypes';
export * from './types/ntsBizTypes';
export * from './types/orgsBizTypes';
export * from './types/preplanAnalysisBizTypes';
export * from './types/quartzBizTypes';
export * from './types/rrsBizTypes';
export * from './types/scheduleBizTypes';
export * from './types/vcsBizTypes';
export * from './types/videoFusionServiceBizTypes';
export * from './types/viscsBizTypes';

export type CommonReqType = any;

export type CommonResType = {
    hasError: boolean;
    status: number;
    response: object;
    msg: string;
};
