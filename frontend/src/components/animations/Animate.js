import { useInView } from '@/hooks/useInView';

export function FadeIn({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, inView] = useInView();

  const directionStyles = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
    none: '',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out h-full ${
        inView ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directionStyles[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function StaggerChildren({ children, className = '', staggerDelay = 80 }) {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * staggerDelay}ms` }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}

export function ScaleIn({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
