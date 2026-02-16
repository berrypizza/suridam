import type { Metadata } from "next";
import "./globals.css";
import HammerMark from "./components/HammerMark";

export const metadata: Metadata = {
  title: "수리담",
  description: "망가진 가구, 새로 사기 전에 사진 한 장으로 상담하세요.",
  openGraph: {
    title: "수리담 가구 수리 리폼",
    description: "사진 1~3장으로 수리 리폼 상담",
    url: "https://suridam.vercel.app/",
    siteName: "수리담",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
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
          overflowX: "hidden", // ✅ 추가
          maxWidth: "100%", // ✅ 추가(안전)
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
                  <h1
                    style={{
                      fontFamily: "SBAggroB",
                      color: "#2fae8a",
                      fontWeight: "1000",
                      fontSize: "21px",
                    }}>
                    수리담 가구 수리 리폼
                  </h1>

                  <div
                    style={{
                      display: "inline-block",
                      fontSize: 12,
                      color: COLORS.subText,
                      justifyContent: "center",
                      marginTop: "1px",
                      fontFamily: "SBAggroL",
                    }}>
                    <p>
                      망가진 가구, 새로 사기 전에,
                      <br /> 사진 한 장으로 수리 리폼 견적 받아보세요.
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
