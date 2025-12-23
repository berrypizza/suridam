import type { Metadata } from "next";
import "./globals.css";
import HammerMark from "./components/HammerMark";

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
              padding: "1.19px 0 14px",
              backdropFilter: "blur(10px)",
            }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <HammerMark size={22} />
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 900,
                    letterSpacing: -0.2,
                    display: "inline-block",
                    justifyContent: "center",
                  }}>
                  <h1>수리담</h1>

                  <div
                    style={{
                      display: "inline-block",
                      fontSize: 12,
                      color: COLORS.subText,
                      justifyContent: "center",
                    }}>
                    <p>
                      담을 수리를 찾아보세요, <br /> 수리담의 수리랑에게
                      요청하면 됩니다.
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* Page */}
          {children}
        </div>
      </body>
    </html>
  );
}
