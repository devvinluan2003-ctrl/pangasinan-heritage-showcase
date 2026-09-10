import Icon from '@/components/atoms/Icon';
export default function SearchForm({ value, onChange }) {
  return <form className="search-form" role="search" onSubmit={(e)=>e.preventDefault()}><label htmlFor="heritage-search">Search heritage sites</label><div className="search-control"><Icon name="search"/><input id="heritage-search" type="search" value={value} onChange={(e)=>onChange(e.target.value)} placeholder="e.g. Bolinao or natural" autoComplete="off"/></div></form>;
}
