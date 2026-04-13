import React from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type AvatarVariant = 'circle' | 'square';

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  variant?: AvatarVariant;
  className?: string;
}

// ─── Style Maps ──────────────────────────────────────────────────────────────

const sizeMap: Record<AvatarSize, { container: string; text: string }> = {
  xs: { container: 'w-6 h-6', text: 'text-[10px]' },
  sm: { container: 'w-8 h-8', text: 'text-xs' },
  md: { container: 'w-10 h-10', text: 'text-sm' },
  lg: { container: 'w-12 h-12', text: 'text-base' },
  xl: { container: 'w-16 h-16', text: 'text-lg' },
  '2xl': { container: 'w-20 h-20', text: 'text-xl' },
};

const variantMap: Record<AvatarVariant, string> = {
  circle: 'rounded-full',
  square: 'rounded-lg',
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

const BG_COLORS = [
  'bg-blue-100 text-blue-700',
  'bg-green-100 text-green-700',
  'bg-yellow-100 text-yellow-700',
  'bg-purple-100 text-purple-700',
  'bg-rose-100 text-rose-700',
  'bg-orange-100 text-orange-700',
  'bg-teal-100 text-teal-700',
  'bg-indigo-100 text-indigo-700',
];

function getColorFromName(name: string): string {
  const index = name.charCodeAt(0) % BG_COLORS.length;
  return BG_COLORS[index];
}

// ─── Component ───────────────────────────────────────────────────────────────

export function Avatar({
  src,
  alt = '',
  name,
  size = 'md',
  variant = 'circle',
  className = '',
}: AvatarProps) {
  const { container, text } = sizeMap[size];
  const shape = variantMap[variant];
  const colorClass = name ? getColorFromName(name) : 'bg-gray-100 text-gray-500';

  const base = [
    'inline-flex items-center justify-center overflow-hidden shrink-0 font-medium select-none',
    container,
    shape,
    className,
  ].join(' ');

  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={[base, 'object-cover'].join(' ')} />
    );
  }

  if (name) {
    return (
      <span className={[base, colorClass].join(' ')}>
        <span className={text}>{getInitials(name)}</span>
      </span>
    );
  }

  // Fallback icon
  return (
    <span className={[base, 'bg-gray-100 text-gray-400'].join(' ')}>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3/5 h-3/5"
        aria-hidden="true"
      >
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
      </svg>
    </span>
  );
}

// ─── AvatarGroup ─────────────────────────────────────────────────────────────

interface AvatarGroupProps {
  avatars: AvatarProps[];
  max?: number;
  size?: AvatarSize;
  variant?: AvatarVariant;
  className?: string;
}

export function AvatarGroup({
  avatars,
  max = 4,
  size = 'md',
  variant = 'circle',
  className = '',
}: AvatarGroupProps) {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;
  const { container, text } = sizeMap[size];
  const shape = variantMap[variant];

  return (
    <div className={['flex -space-x-2', className].join(' ')}>
      {visible.map((avatar, i) => (
        <div
          key={i}
          className="ring-2 ring-white rounded-full"
          style={{ zIndex: visible.length - i }}
        >
          <Avatar {...avatar} size={size} variant={variant} />
        </div>
      ))}
      {overflow > 0 && (
        <span
          className={[
            'inline-flex items-center justify-center ring-2 ring-white bg-gray-100 text-gray-600 font-medium',
            container,
            shape,
            text,
          ].join(' ')}
        >
          +{overflow}
        </span>
      )}
    </div>
  );
}

export type { AvatarProps, AvatarGroupProps, AvatarSize, AvatarVariant };
