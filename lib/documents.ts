export type User={id:string;name:string;email:string};
export type DocumentRecord={id:string;title:string;content:any;owner_id:string;created_at:string;updated_at:string};
export function canAccess(doc:DocumentRecord, userId:string, sharedIds:string[]){return doc.owner_id===userId || sharedIds.includes(userId)}
