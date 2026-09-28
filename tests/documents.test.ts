import {describe,it,expect} from 'vitest';
import {canAccess} from '../lib/documents';
const doc={id:'d1',title:'Test',content:{},owner_id:'owner',created_at:'',updated_at:''};
describe('document access',()=>{it('allows owner',()=>expect(canAccess(doc,'owner',[])).toBe(true));it('allows shared user',()=>expect(canAccess(doc,'reviewer',['reviewer'])).toBe(true));it('rejects unrelated user',()=>expect(canAccess(doc,'other',['reviewer'])).toBe(false));});
