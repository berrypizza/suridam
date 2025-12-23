export default function JarMark({ size = 22 }: { size?: number }) {
  // 아주 미니멀한 항아리 실루엣 (무채/묵직)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true">
      {/* 목 부분 */}
      <path
        d="M9 5.6C9 4.72 9.72 4 10.6 4h2.8C14.28 4 15 4.72 15 5.6V7H9V5.6Z"
        fill="#0E0E0E"
        opacity="0.92"
      />
      {/* 몸통 */}
      <path
        d="M7.3 7.8c-.1-.55.33-1.05.9-1.05h7.6c.57 0 1 .5.9 1.05l-.7 3.8c-.1.55-.2 1.2-.2 1.9 0 3.1-1.7 6.5-4.8 6.5s-4.8-3.4-4.8-6.5c0-.7-.1-1.35-.2-1.9l-.7-3.8Z"
        fill="#0E0E0E"
      />
      {/* 바닥 라인 (도자기 받침 느낌) */}
      <path
        d="M7 20.5h10"
        stroke="#0E0E0E"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}
