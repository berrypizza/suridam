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
    </main>
  );
}
