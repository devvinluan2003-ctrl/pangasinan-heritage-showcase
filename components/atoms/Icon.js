export default function Icon({ name, size=20 }) {
  const common={width:size,height:size,viewBox:'0 0 24 24','aria-hidden':'true',focusable:'false',fill:'none',stroke:'currentColor',strokeWidth:'2',strokeLinecap:'round',strokeLinejoin:'round'};
  if(name==='search') return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
  if(name==='pin') return <svg {...common}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
  if(name==='arrow-left') return <svg {...common}><path d="m15 18-6-6 6-6"/></svg>;
  if(name==='check') return <svg {...common}><path d="m5 12 4 4L19 6"/></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="9"/></svg>;
}
