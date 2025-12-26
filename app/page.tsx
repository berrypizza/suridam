import Image from "next/image";
import surirang from "@/public/surirang.png";
import surirang2 from "@/public/suriragn2.png";
import surirang3 from "@/public/surirang3.png";

import surirangDance from "@/public/surirangDance.webp";

export default function Home() {
  const COLORS = {
    card: "#FFFFFF",
    text: "#111111",
    subText: "#777777",
    border: "#E0E0E0",
    accent: "#0E0E0E",
  };

  const YT_URL = "https://www.youtube.com/@surirang-911/shorts";
  const NB_URL = "https://blog.naver.com/sofaresq";

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
        <h1
          style={{
            marginTop: 8,
            marginBottom: 0,
            fontSize: 26,
            fontWeight: 950,
            letterSpacing: -0.4,
            lineHeight: 1.15,
          }}>
          상담부터 방문까지,
          <br />
          수리를 담다.
        </h1>

        <p style={{ marginTop: 10, color: COLORS.subText, lineHeight: 1.55 }}>
          <b style={{ color: COLORS.text }}>작은 수리 </b>부터
          <b style={{ color: COLORS.text }}> 큰 수리 </b>까지.
          <br /> 사진 1~3장으로 수리견적 받을 수 있어요.
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
          💬 <b style={{ color: "#bbff00ff" }}>요청하기</b>
          <span style={{ fontSize: 12, opacity: 0.85 }}>(10초 소요)</span>
        </a>
      </section>

      {/* ▼ 수리랑 메인 카드 (CTA 포함) */}
      <section
        style={{
          background: "#FFFFFF",
          border: "1px solid #E0E0E0",
          borderRadius: 22,
          padding: 16,
          boxShadow: "0 14px 40px rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}>
        {/* 상단 브랜드 영역 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}>
          <Image
            src={surirang}
            alt="수리랑"
            style={{
              width: 56,
              height: "auto",
            }}
          />

          <div style={{ lineHeight: 1.35 }}>
            <div style={{ fontWeight: 900, letterSpacing: -0.2 }}>수리랑</div>
            <div style={{ fontSize: 12, color: "#777" }}>
              수리담에 담아, 수리랑들이 갑니다.
            </div>
          </div>
        </div>

        {/* 하단 CTA 버튼 영역 */}
        <div
          style={{
            display: "flex",
            gap: 10,
          }}>
          {/* 유튜브 */}
          <a
            href={YT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 14px",
              borderRadius: 14,
              background: COLORS.accent,
              textDecoration: "none",
              color: "#fff",
              fontWeight: 900,
            }}>
            <Image
              src={surirang3}
              alt="수리랑 유튜브"
              width={40}
              height={40}
              style={{
                borderRadius: "50%",
                flexShrink: 0,
                // background: "#fff",
              }}
            />
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontSize: 14, marginBottom: "3px" }}>
                <span style={{}}>▶</span>
                <span style={{ color: "#bbff00ff" }}>YouTube</span>
              </div>
              <div style={{ fontSize: 11, opacity: 0.85 }}>영상 보러가기</div>
            </div>
          </a>

          {/* 블로그 */}
          <a
            href={NB_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 14px",
              borderRadius: 14,
              background: "#009744ff", // 네이버 느낌
              textDecoration: "none",
              color: "#fff",
              fontWeight: 900,
            }}>
            <Image
              src={surirang2}
              alt="수리랑 블로그"
              width={40}
              height={40}
              style={{
                borderRadius: "50%",
                flexShrink: 0,
                // background: "#fff",
              }}
            />
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontSize: 14, marginBottom: "3px" }}>
                <span style={{ fontWeight: 900 }}>N</span>
                <span style={{ color: "#bbff00ff" }}> Blog</span>
              </div>
              <div style={{ fontSize: 11, opacity: 0.9 }}>블로그 보기</div>
            </div>
          </a>
        </div>
      </section>
      {/* ▲ 수리랑 메인 카드 */}
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
            "가구 수리",
            "소파 수리",
            "문짝 교체",
            "문짝 경첩 교체",
            "의자 인조가죽 교체",
            "업소용 붙박이의자 인조가죽 교체",
            "침대 수리",
            "소파 꺼짐",
            "슬라이딩 도어 수리",
            "상부장 처짐 수리",
            "서랍장 레일 교체",
            "의자/식탁 다리 흔들림(나무)",
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
                사진으로 판단 <br /> {t === "트랩 교체" ? "(준비중)" : ""}
                {t === "앵글밸브 교체" ? "(준비중)" : ""}
                {t === "간단 막힘" ? "(준비중)" : ""}
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
        <div style={{ fontSize: 16, fontWeight: 900, letterSpacing: -0.2 }}>
          진행 방식
        </div>

        <ol
          style={{
            marginTop: 10,
            paddingLeft: 18,
            color: COLORS.subText,
            lineHeight: 1.7,
            fontWeight: 700,
            fontSize: 14,
          }}>
          <li>
            요청 누르기({" "}
            <b
              style={{
                display: "inline-block",
                background: "black",
                color: "#bbff00bb",
                padding: "0 3px",
                borderRadius: "7.119px",
              }}>
              요청하기
            </b>{" "}
            )
          </li>
          <li>양식 작성 → 제출 → 문자자동작성</li>
          <li>사진 1~3장, 자동 작성된 문자랑 같이 전송</li>
          <li>상담 후 → 수리랑이 방문</li>
        </ol>

        <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
          <a
            href="/request"
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
            💬 <b style={{ color: "#bbff00ff" }}>요청하기</b> <br />
            <span style={{ fontSize: 12, opacity: 0.85 }}> (10초 소요)</span>
          </a>

          <a
            href="tel:01091273024"
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
            📞 전화
            <br />
            <span style={{ fontSize: 12, opacity: 0.85 }}> (직통 상담)</span>
          </a>
        </div>
      </section>
    </main>
  );
}
