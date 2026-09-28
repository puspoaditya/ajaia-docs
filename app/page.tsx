'use client';
import {useEffect,useState} from 'react';
import {supabase} from '../lib/supabase';
import Link from 'next/link';
import {User} from '../lib/documents';
export default function Home(){
 const [users,setUsers]=useState<User[]>([]); const [user,setUser]=useState<User|null>(null); const [docs,setDocs]=useState<any[]>([]); const [loading,setLoading]=useState(true);
 useEffect(()=>{(async()=>{const {data}=await supabase.from('users').select('*').order('name');setUsers(data||[]);const saved=localStorage.getItem('ajaia-user');if(saved&&data)setUser(data.find(u=>u.id===saved)||data[0]||null);else if(data?.[0])setUser(data[0]);setLoading(false)})()},[]);
 useEffect(()=>{if(user){localStorage.setItem('ajaia-user',user.id);loadDocs()}},[user]);
 async function loadDocs(){if(!user)return;const {data:owned}=await supabase.from('documents').select('*').eq('owner_id',user.id).order('updated_at',{ascending:false});const {data:shares}=await supabase.from('document_shares').select('document_id').eq('user_id',user.id);let shared:any[]=[];if(shares?.length){const {data}=await supabase.from('documents').select('*').in('id',shares.map(x=>x.document_id)).order('updated_at',{ascending:false});shared=data||[]}setDocs([...(owned||[]).map(d=>({...d,access:'Owned'})),...shared.map(d=>({...d,access:'Shared'}))])}
 async function createDoc(){if(!user)return;const {data}=await supabase.from('documents').insert({title:'Untitled document',owner_id:user.id,content:{type:'doc',content:[{type:'paragraph'}]}}).select().single();if(data)location.href='/documents/'+data.id}
 if(loading)return <div className="page">Loading…</div>;
 return <div className="shell"><header className="topbar"><div className="brand">Ajaia <span>Docs</span></div><select className="userSelect" value={user?.id||''} onChange={e=>setUser(users.find(u=>u.id===e.target.value)||null)}>{users.map(u=><option key={u.id} value={u.id}>{u.name} — {u.email}</option>)}</select></header><main className="page"><div className="hero"><div><h1>My documents</h1><div className="muted">Create, edit and share documents in one lightweight workspace.</div></div><button className="primary" onClick={createDoc}>+ New document</button></div>{docs.length===0?<div className="empty"><h3>No documents yet</h3><p className="muted">Create your first document or import a .txt / .md file.</p><button className="primary" onClick={createDoc}>Create document</button></div>:<div className="grid">{docs.map(d=><Link key={d.id} href={'/documents/'+d.id} className="card" style={{textDecoration:'none',color:'inherit'}}><span className="badge">{d.access}</span><h3>{d.title}</h3><div className="muted">Updated {new Date(d.updated_at).toLocaleString()}</div></Link>)}</div>}</main></div>
}
