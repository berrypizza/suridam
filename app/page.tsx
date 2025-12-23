export default function Home() {
  const COLORS = {
    card: "#FFFFFF",
    text: "#111111",
    subText: "#777777",
    border: "#E0E0E0",
    accent: "#0E0E0E",
  };

  const cardStyle: React.CSSProperties = {
    background: COLORS.card,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 22,
    padding: 16,
    boxShadow: "0 14px 40px rgba(0,0,0,0.08)",
  };

  return (
    <main style={{ display: "grid", gap: 12 }}>
      {/* Hero */}
      <section style={cardStyle}>
        <div style={{ fontSize: 12, color: COLORS.subText }}>수리를 담다</div>
        <h1
          style={{
            marginTop: 8,
            marginBottom: 0,
            fontSize: 26,
            fontWeight: 950,
            letterSpacing: -0.4,
            lineHeight: 1.15,
          }}>
          필요한 수리만,
          <br />
          담아서 해결합니다
        </h1>

        <p style={{ marginTop: 10, color: COLORS.subText, lineHeight: 1.55 }}>
          지금은 <b style={{ color: COLORS.text }}>배관 교체</b>부터 시작합니다.
          사진 1장으로 가능 여부를 먼저 안내드려요.
        </p>

        <a
          href="/request"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginTop: 14,
            padding: "14px 14px",
            borderRadius: 16,
            background: COLORS.accent,
            color: "#fff",
            textDecoration: "none",
            fontWeight: 900,
            letterSpacing: -0.2,
          }}>
          💬 요청하기{" "}
          <span style={{ fontSize: 12, opacity: 0.85 }}>(사진)</span>
        </a>
      </section>

      {/* Scope */}
      <section style={cardStyle}>
        <div style={{ fontSize: 14, fontWeight: 900, letterSpacing: -0.2 }}>
          지금 가능한 작업
        </div>

        <div
          style={{
            marginTop: 12,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
          }}>
          {[
            "수전 교체",
            "트랩 교체",
            "앵글밸브 교체",
            "샤워기/호스",
            "폽업 교체",
            "간단 막힘",
          ].map((t) => (
            <div
              key={t}
              style={{
                border: `1px solid ${COLORS.border}`,
                borderRadius: 18,
                padding: 12,
                background: "#FAFAFA",
                fontWeight: 850,
                letterSpacing: -0.2,
              }}>
              {t}
              <div
                style={{ marginTop: 6, fontSize: 12, color: COLORS.subText }}>
                사진으로 판단
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 12,
            fontSize: 12,
            color: COLORS.subText,
            lineHeight: 1.5,
          }}>
          * 누수탐지/타일 공사/배관 매립 공사는 현재 진행하지 않습니다.
        </div>
      </section>

      {/* How */}
      <section style={cardStyle}>
        <div style={{ fontSize: 14, fontWeight: 900, letterSpacing: -0.2 }}>
          진행 방식
        </div>

        <ol
          style={{
            marginTop: 10,
            paddingLeft: 18,
            color: COLORS.subText,
            lineHeight: 1.7,
          }}>
          <li>사진 1~3장 + 증상 입력</li>
          <li>가능/불가 및 대략 비용 범위 안내</li>
          <li>확정 후 상세주소 요청 → 방문</li>
        </ol>

        <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
          <a
            href="/request"
            style={{
              flex: 1,
              textAlign: "center",
              padding: "12px 12px",
              borderRadius: 16,
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              textDecoration: "none",
              color: COLORS.text,
              fontWeight: 900,
            }}>
            💬 요청
          </a>

          <a
            href="tel:01091273024"
            style={{
              flex: 1,
              textAlign: "center",
              padding: "12px 12px",
              borderRadius: 16,
              background: COLORS.accent,
              textDecoration: "none",
              color: "#fff",
              fontWeight: 900,
            }}>
            📞 전화
          </a>
        </div>
      </section>
    </main>
  );
}
