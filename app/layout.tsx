import type { Metadata } from "next";
import "./globals.css";
import JarMark from "./components/JarMark";

export const metadata: Metadata = {
  title: "수리담",
  description: "수리를 담다. 사진 1장으로 상담하는 배관 교체 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const COLORS = {
    bg: "#F2F2F2",
    card: "#FFFFFF",
    text: "#111111",
    subText: "#777777",
    border: "#E0E0E0",
    accent: "#0E0E0E",
  };

  return (
    <html lang="ko">
      <body
        style={{
          margin: 0,
          background: COLORS.bg,
          color: COLORS.text,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}>
        <div
          style={{
            maxWidth: 420,
            margin: "0 auto",
            minHeight: "100vh",
            padding: 16,
            paddingBottom: 140, // ✅ 하단바 공간
          }}>
          {/* Header (quiet, minimal) */}
          <header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 20,
              padding: "12px 0 14px",
              backdropFilter: "blur(10px)",
            }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <JarMark size={22} />
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 900,
                    letterSpacing: -0.2,
                  }}>
                  수리담
                </div>
              </div>

              <div style={{ fontSize: 12, color: COLORS.subText }}>
                수리를 담다
              </div>
            </div>

            <div style={{ marginTop: 10 }}>
              <div
                style={{
                  fontSize: 12,
                  color: COLORS.subText,
                  lineHeight: 1.4,
                }}>
                배관 교체 · 사진 1장으로 상담
              </div>
            </div>
          </header>

          {/* Page */}
          {children}

          {/* Bottom fixed bar (container-like, pottery vibe) */}
          <div
            style={{
              position: "fixed",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: 14,
              width: "min(420px, calc(100vw - 32px))",
              zIndex: 9999,
              pointerEvents: "none",
            }}>
            <div
              style={{
                pointerEvents: "auto",
                background: "rgba(255,255,255,0.92)",
                border: `1px solid ${COLORS.border}`,
                borderRadius: 20,
                padding: 10,
                boxShadow: "0 18px 46px rgba(0,0,0,0.14)",
                backdropFilter: "blur(12px)",
              }}>
              <div style={{ display: "flex", gap: 10 }}>
                <a
                  href="tel:01091273024"
                  style={{
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "14px 12px",
                    borderRadius: 16,
                    background: COLORS.accent,
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 900,
                    letterSpacing: -0.2,
                    whiteSpace: "nowrap",
                  }}>
                  📞 전화
                  <span style={{ fontSize: 12, opacity: 0.85 }}>상담</span>
                </a>

                <a
                  href="/request"
                  style={{
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "14px 12px",
                    borderRadius: 16,
                    background: COLORS.card,
                    color: COLORS.text,
                    textDecoration: "none",
                    fontWeight: 900,
                    border: `1px solid ${COLORS.border}`,
                    letterSpacing: -0.2,
                    whiteSpace: "nowrap",
                  }}>
                  💬 요청
                  <span style={{ fontSize: 12, color: COLORS.subText }}>
                    사진
                  </span>
                </a>
              </div>

              <div
                style={{
                  marginTop: 8,
                  fontSize: 12,
                  color: COLORS.subText,
                  textAlign: "center",
                  lineHeight: 1.35,
                }}>
                상세주소는 상담 후 요청 · 사진은 문자에 첨부
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
