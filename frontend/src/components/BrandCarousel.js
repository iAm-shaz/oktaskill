import { useState, useEffect } from 'react';
import { useInView } from '@/hooks/useInView';

const brands = [
  { name: 'Simplilearn', logo: '/logos/simplilearn.png' },
  { name: 'Emeritus', logo: '/logos/emeritus.png' },
  { name: 'Knolskape', logo: '/logos/knolskape.png' },
  { name: 'Great Learning', logo: '/logos/great-learning.png' },
];

export default function BrandCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionRef, inView] = useInView();

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % brands.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div ref={sectionRef} className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
      {brands.map((brand, i) => {
        const isActive = i === activeIndex;
        return (
          <div
            key={brand.name}
            data-testid={`trusted-brand-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
            className={`bg-white rounded-xl flex items-center justify-center p-4 transition-all duration-500 ease-in-out cursor-pointer ${
              isActive
                ? 'w-[220px] h-[100px] shadow-lg scale-110 ring-2 ring-okta-gold/40'
                : 'w-[180px] h-[85px] shadow-sm opacity-60 grayscale hover:opacity-80 hover:grayscale-0'
            }`}
            onClick={() => setActiveIndex(i)}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-full max-w-full object-contain transition-all duration-500"
            />
          </div>
        );
      })}
    </div>
  );
}
