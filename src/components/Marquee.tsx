export default function Marquee() {
  const items = [
    'LIMITED TIME SALE • UP TO 65% OFF',
    'FLASH DEAL • ENDS SOON',
    'EXCLUSIVE OFFER • DON\'T MISS OUT',
    'PREMIUM QUALITY • UNBEATABLE PRICES',
    'BOOST YOUR BUSINESS TODAY',
  ];

  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <section className="py-4 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeatedItems.map((item, i) => (
          <span key={i} className="text-white font-bold text-sm mx-8 tracking-wide">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
