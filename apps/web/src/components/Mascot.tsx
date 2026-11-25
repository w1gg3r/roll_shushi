// Фирменный персонаж «ролл-улыбка» из утверждённого дизайна.
// Цвета: чёрный нори #1F1F1F, лосось #FF6B00, рис #F7F5ED.
type MascotProps = {
  size?: number;
  /** Подпись для скринридера. Без неё персонаж декоративный и скрывается от него. */
  title?: string;
};

export default function Mascot({ size = 160, title }: MascotProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <rect x="28" y="60" width="144" height="120" rx="48" fill="#1F1F1F" />
      <ellipse cx="100" cy="62" rx="66" ry="24" fill="#FF6B00" />
      <path d="M52 56q24-10 48 0t48 0" fill="none" stroke="#FFB27A" strokeWidth={5} strokeLinecap="round" />
      <rect x="52" y="98" width="96" height="70" rx="34" fill="#F7F5ED" />
      <path d="M76 124q9-9 18 0M106 124q9-9 18 0" fill="none" stroke="#1F1F1F" strokeWidth={5} strokeLinecap="round" />
      <circle cx="70" cy="142" r="7" fill="#FF6B00" opacity={0.55} />
      <circle cx="130" cy="142" r="7" fill="#FF6B00" opacity={0.55} />
      <path d="M88 136Q100 152 112 136Z" fill="#1F1F1F" stroke="#1F1F1F" strokeWidth={3} strokeLinejoin="round" />
      <rect x="8" y="88" width="14" height="30" rx="7" fill="#F7F5ED" stroke="#1F1F1F" strokeWidth={4} />
      <circle cx="22" cy="128" r="16" fill="#F7F5ED" stroke="#1F1F1F" strokeWidth={4} />
      <rect x="178" y="88" width="14" height="30" rx="7" fill="#F7F5ED" stroke="#1F1F1F" strokeWidth={4} />
      <circle cx="178" cy="128" r="16" fill="#F7F5ED" stroke="#1F1F1F" strokeWidth={4} />
      <path d="M158 40l12-12M176 58l16-2M150 26l3-18" fill="none" stroke="#FF6B00" strokeWidth={7} strokeLinecap="round" />
    </svg>
  );
}
