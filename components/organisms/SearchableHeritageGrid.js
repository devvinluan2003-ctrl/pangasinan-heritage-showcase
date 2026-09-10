'use client';
import { useMemo, useState } from 'react';
import SearchForm from '@/components/molecules/SearchForm';
import HeritageGrid from '@/components/organisms/HeritageGrid';
export default function SearchableHeritageGrid({ sites }) {
  const [query,setQuery]=useState('');
  const filtered=useMemo(()=>{const q=query.trim().toLowerCase(); if(!q) return sites; return sites.filter(s=>`${s.name} ${s.location} ${s.category}`.toLowerCase().includes(q));},[query,sites]);
  return <div className="directory"><SearchForm value={query} onChange={setQuery}/><p className="result-count" aria-live="polite">{filtered.length} {filtered.length===1?'site':'sites'} shown</p>{filtered.length?<HeritageGrid sites={filtered}/>:<div className="empty-state"><h2>No matching site</h2><p>Try another destination, location, or category.</p></div>}</div>;
}
