export default function Home() {
  return (
    <main style={{ padding: "24px", fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>수리담</h1>

      <p style={{ marginTop: "12px", fontSize: "16px" }}>
        배관 교체, 사진 1장으로 상담하세요.
      </p>

      <p style={{ marginTop: "4px", fontSize: "14px", color: "#555" }}>
        수전 · 트랩 · 앵글밸브 등 쉬운 교체만 진행합니다.
      </p>

      <a
        href="/request"
        style={{
          display: "inline-block",
          marginTop: "24px",
          padding: "14px 20px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
        }}>
        배관 교체 상담하기
      </a>
      <div
        style={{
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: 12,
          width: "calc(420px - 32px)",
          maxWidth: "calc(100vw - 32px)",
          zIndex: 50,
        }}>
        <a
          href="tel:01091273024"
          style={{
            display: "block",
            width: "100%",
            textAlign: "center",
            padding: "14px 16px",
            borderRadius: 14,
            background: "#000",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 900,
            boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
          }}>
          📞 전화로 바로 상담 (010-9127-3024)
        </a>

        <div
          style={{
            marginTop: 8,
            textAlign: "center",
            fontSize: 12,
            color: "#666",
          }}>
          문자 상담은 “요청하기”에서 가능해요
        </div>
      </div>
    </main>
  );
}
