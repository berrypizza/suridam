import Image from "next/image";
import surirang from "@/public/surirang.png";
import surirang2 from "@/public/suriragn2.png";
import surirang3 from "@/public/surirang3.png";

const reviewImages = [
  "/reviews/review1.jpg",
  "/reviews/review2.jpg",
  "/reviews/review3.jpg",
  "/reviews/review4.jpg",
  "/reviews/review5.jpg",
  "/reviews/review6.jpg",
  "/reviews/review7.jpg",
  "/reviews/review8.jpg",
  "/reviews/review9.jpg",
];

const COLORS = {
  card: "#FFFFFF",
  text: "#1e1e1e",
  subText: "#7a7a7a",
  border: "#e5e5e5",
  brand: "#2fae8a",
  brand2: "#2e9f83",
  brandBg: "#f0faf6",
  dark: "#1e1e1e",
};

const YT_URL = "https://www.youtube.com/@surirang-911/shorts";
const NB_URL = "https://blog.naver.com/sofaresq";

const cardStyle: React.CSSProperties = {
  background: COLORS.card,
  border: `1px solid ${COLORS.border}`,
  borderRadius: 22,
  padding: 18,
  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
  overflow: "hidden",
};

const diffs = [
  {
    problem: "일단 방문부터\n현장에서 말이 바뀜",
    solution: "사진으로 1차 판단 후\n가능한 경우에만 방문합니다",
  },
  {
    problem: "비용은\n'가봐야 알아요'로 끝",
    solution: "범위를 먼저 공유하고\n납득 후 진행합니다",
  },
  {
    problem: "수리 후\n마무리 기준이 없음",
    solution: "수평·유격·열림감·소음\n기준으로 확인합니다",
  },
  {
    problem: '"할 수 있다"고 해놓고\n결과가 애매함',
    solution: "어려우면 사진 보고\n먼저 말씀드립니다",
  },
];

export default function Home() {
  return (
    <main style={{ display: "grid", gap: 12 }}>
      {/* ── 1. 히어로 ── */}
      <section style={cardStyle}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 8,
          }}>
          <span
            style={{
              fontSize: 12,
              color: COLORS.subText,
              fontFamily: "Pretendard",
              fontWeight: 500,
            }}>
            수리담 · 가구 출장 수리
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              border: `1px solid ${COLORS.brand}`,
              borderRadius: 99,
              background: COLORS.brandBg,
              color: COLORS.brand2,
              fontSize: 11,
              fontWeight: 700,
              padding: "3px 10px",
              fontFamily: "Pretendard",
            }}>
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: COLORS.brand,
                display: "inline-block",
              }}
            />
            안 되는 건 안 된다고 먼저 말합니다
          </span>
        </div>

        <h2
          style={{
            marginTop: 14,
            marginBottom: 0,
            fontSize: 24,
            fontWeight: 900,
            letterSpacing: -0.5,
            lineHeight: 1.25,
            fontFamily: "SBAggroB",
            color: COLORS.text,
          }}>
          수리 전 사진 한 장,
          <br />
          수리 후 탄성 한 번 —{" "}
          <span style={{ position: "relative", display: "inline-block" }}>
            <span style={{ position: "relative", zIndex: 1 }}>
              직접 확인하세요.
            </span>
            <span
              style={{
                position: "absolute",
                bottom: 2,
                left: 0,
                width: "100%",
                height: 8,
                background: COLORS.brand,
                opacity: 0.3,
                borderRadius: 4,
                zIndex: 0,
              }}
            />
          </span>
        </h2>

        <div
          style={{
            marginTop: 14,
            borderRadius: 14,
            background: "#f7f7f7",
            border: `1px solid ${COLORS.border}`,
            padding: "12px 14px",
          }}>
          <p
            style={{
              margin: 0,
              fontSize: 14,
              lineHeight: 1.65,
              color: COLORS.text,
              fontFamily: "Pretendard",
              fontWeight: 500,
            }}>
            처음 오셨나요? 그렇다면 <b>그냥 믿지 마세요.</b>
            <br />
            수리담이 자신 있는 이유, <b>스크롤 3번</b>이면 확인됩니다.
          </p>
        </div>

        <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
          <a
            href="/request"
            style={{
              flex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "14px 14px",
              borderRadius: 14,
              background: COLORS.brand,
              color: "#fff",
              textDecoration: "none",
              fontWeight: 900,
              fontSize: 15,
              fontFamily: "Pretendard",
            }}>
            💬 사진 상담 시작하기
          </a>
          <a
            href="tel:01091273024"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 10px",
              borderRadius: 14,
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              color: COLORS.text,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 14,
              fontFamily: "Pretendard",
            }}>
            📞 전화
          </a>
        </div>

        <p
          style={{
            marginTop: 12,
            marginBottom: 0,
            textAlign: "center",
            fontSize: 12,
            color: COLORS.subText,
            fontFamily: "Pretendard",
          }}>
          ↓ 후기부터 먼저 보실게요
        </p>
      </section>

      {/* ── 2. 리뷰 마퀴 ── */}
      <section style={cardStyle}>
        <p
          style={{
            margin: "0 0 4px",
            fontSize: 11,
            letterSpacing: 2,
            color: COLORS.subText,
            fontFamily: "Pretendard",
            textTransform: "uppercase",
          }}>
          Real Reviews
        </p>
        <div
          style={{
            fontFamily: "SBAggroB",
            fontSize: 18,
            fontWeight: 900,
            color: COLORS.text,
            marginBottom: 4,
          }}>
          말보다 후기가 먼저입니다
        </div>
        <p
          style={{
            margin: "0 0 14px",
            fontSize: 12,
            color: COLORS.subText,
            fontFamily: "Pretendard",
          }}>
          긴 설명 대신, 실제 고객의 한 줄을 먼저 읽어보세요.
        </p>

        <div
          className="reviewViewport"
          style={{
            width: "100%",
            overflow: "hidden",
            borderRadius: 16,
            position: "relative",
          }}>
          <div
            className="reviewTrack"
            style={{
              display: "flex",
              gap: 10,
              width: "max-content",
              willChange: "transform",
            }}>
            {[...reviewImages, ...reviewImages].map((src, index) => (
              <div
                key={`${src}-${index}`}
                style={{
                  flex: "0 0 auto",
                  borderRadius: 14,
                  overflow: "hidden",
                  border: `1px solid ${COLORS.border}`,
                  background: "#fafafa",
                }}>
                <Image
                  src={src}
                  alt={`수리담 리뷰 사진 ${index + 1}`}
                  width={200}
                  height={200}
                  style={{
                    display: "block",
                    width: 200,
                    height: 200,
                    objectFit: "cover",
                  }}
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </div>
        <p
          style={{
            marginTop: 10,
            fontSize: 12,
            color: COLORS.subText,
            fontFamily: "Pretendard",
            lineHeight: 1.5,
          }}>
          더 많은 사례는 블로그 / 유튜브에서 확인 가능합니다.
        </p>
      </section>

      {/* ── 3. 수리랑 채널 ── */}
      <section style={cardStyle}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 14,
          }}>
          <Image
            src={surirang}
            alt="수리랑"
            style={{ width: 48, height: "auto" }}
          />
          <div>
            <div
              style={{
                fontFamily: "SBAggroB",
                fontSize: 15,
                fontWeight: 900,
                color: COLORS.text,
              }}>
              수리랑
            </div>
            <div
              style={{
                fontSize: 12,
                color: COLORS.subText,
                fontFamily: "Pretendard",
              }}>
              가구 수리 리폼 하는 호랑이
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
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
              background: COLORS.dark,
              textDecoration: "none",
              color: "#fff",
            }}>
            <Image
              src={surirang3}
              alt="수리랑 유튜브"
              width={36}
              height={36}
              style={{ borderRadius: "50%", flexShrink: 0 }}
            />
            <div style={{ fontFamily: "Pretendard", lineHeight: 1.3 }}>
              <div style={{ fontSize: 13, fontWeight: 900 }}>
                ▶ <span style={{ color: COLORS.brand }}>YouTube</span>
              </div>
              <div style={{ fontSize: 11, opacity: 0.7 }}>영상 보러가기</div>
            </div>
          </a>
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
              background: "#03C75A",
              textDecoration: "none",
              color: "#fff",
            }}>
            <Image
              src={surirang2}
              alt="수리랑 블로그"
              width={36}
              height={36}
              style={{ borderRadius: "50%", flexShrink: 0 }}
            />
            <div style={{ fontFamily: "Pretendard", lineHeight: 1.3 }}>
              <div style={{ fontSize: 13, fontWeight: 900 }}>
                N <span style={{ color: "#fff" }}>Blog</span>
              </div>
              <div style={{ fontSize: 11, opacity: 0.85 }}>블로그 보기</div>
            </div>
          </a>
        </div>
      </section>

      {/* ── 4. 차별점 ── */}
      <section style={cardStyle}>
        <p
          style={{
            margin: "0 0 4px",
            fontSize: 11,
            letterSpacing: 2,
            color: COLORS.subText,
            fontFamily: "Pretendard",
            textTransform: "uppercase",
          }}>
          Why Suridam
        </p>
        <div
          style={{
            fontFamily: "SBAggroB",
            fontSize: 18,
            fontWeight: 900,
            color: COLORS.text,
            marginBottom: 4,
          }}>
          그래서 뭐가 다른가요?
        </div>
        <p
          style={{
            margin: "0 0 14px",
            fontSize: 12,
            color: COLORS.subText,
            fontFamily: "Pretendard",
          }}>
          일반 출장 수리 업체와 수리담의 차이
        </p>

        <div style={{ display: "grid", gap: 8 }}>
          {diffs.map((d, i) => (
            <div
              key={i}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                border: `1px solid ${COLORS.border}`,
              }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "11px 14px",
                  background: "#fafafa",
                }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "#fee2e2",
                    color: "#ef4444",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    fontWeight: 900,
                    marginTop: 2,
                  }}>
                  ✕
                </div>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: 10,
                      fontWeight: 700,
                      background: "#fee2e2",
                      color: "#ef4444",
                      borderRadius: 99,
                      padding: "1px 7px",
                      marginBottom: 4,
                      fontFamily: "Pretendard",
                    }}>
                    일반 업체
                  </span>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      color: COLORS.subText,
                      fontFamily: "Pretendard",
                      textDecoration: "line-through",
                      textDecorationColor: "#fca5a5",
                      lineHeight: 1.55,
                      whiteSpace: "pre-line",
                    }}>
                    {d.problem}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "11px 14px",
                  background: COLORS.card,
                  borderTop: `1px solid ${COLORS.border}`,
                }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: COLORS.brand,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    fontWeight: 900,
                    marginTop: 2,
                  }}>
                  ✓
                </div>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: 10,
                      fontWeight: 700,
                      background: COLORS.brandBg,
                      color: COLORS.brand2,
                      borderRadius: 99,
                      padding: "1px 7px",
                      marginBottom: 4,
                      fontFamily: "Pretendard",
                    }}>
                    수리담
                  </span>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      color: COLORS.text,
                      fontWeight: 700,
                      fontFamily: "Pretendard",
                      lineHeight: 1.55,
                      whiteSpace: "pre-line",
                    }}>
                    {d.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 12,
            borderRadius: 14,
            background: COLORS.brandBg,
            border: `1px solid ${COLORS.brand}`,
            padding: "12px 14px",
          }}>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: COLORS.text,
              lineHeight: 1.6,
              fontFamily: "Pretendard",
              fontWeight: 600,
            }}>
            위 4가지 기준, 수리담이 지키지 못하면 <b>출장비를 받지 않습니다.</b>
          </p>
        </div>
      </section>

      {/* ── 5. 지금 가능한 작업 ── */}
      <section style={cardStyle}>
        <div
          style={{
            fontFamily: "SBAggroB",
            fontSize: 18,
            fontWeight: 900,
            color: COLORS.brand,
            marginBottom: 12,
          }}>
          지금 가능한 작업
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            fontFamily: "Pretendard",
          }}>
          {[
            "가구 수리",
            "소파 수리",
            "문짝 교체",
            "문짝 경첩 교체",
            "의자 인조가죽 교체",
            "업소용 붙박이의자 교체",
            "침대 수리",
            "소파 꺼짐",
            "슬라이딩 도어 수리",
            "상부장 처짐 수리",
            "서랍장 레일 교체",
            "의자/식탁 다리 흔들림",
          ].map((t) => (
            <div
              key={t}
              style={{
                border: `1px solid ${COLORS.border}`,
                borderRadius: 16,
                padding: "11px 12px",
                background: "#fafafa",
              }}>
              <div
                style={{
                  fontSize: 13,
                  color: COLORS.text,
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}>
                {t}
              </div>
              <div
                style={{ marginTop: 5, fontSize: 11, color: COLORS.subText }}>
                사진으로 판단
              </div>
            </div>
          ))}
        </div>
        <p
          style={{
            marginTop: 12,
            fontSize: 12,
            color: COLORS.subText,
            fontFamily: "Pretendard",
            lineHeight: 1.5,
          }}>
          * 누수탐지 / 타일 공사 / 배관 매립 공사는 현재 진행하지 않습니다.
        </p>
      </section>

      {/* ── 6. 진행 방식 + CTA ── */}
      <section
        style={{
          ...cardStyle,
          background: COLORS.brandBg,
          border: `1px solid ${COLORS.brand}`,
        }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <p
            style={{
              margin: 0,
              fontSize: 11,
              letterSpacing: 2,
              color: COLORS.brand2,
              fontFamily: "Pretendard",
              textTransform: "uppercase",
            }}>
            Contact
          </p>
          <div
            style={{
              marginTop: 8,
              fontFamily: "SBAggroB",
              fontSize: 20,
              fontWeight: 900,
              color: COLORS.text,
            }}>
            스크롤 3번 다 보셨나요?
          </div>
          <p
            style={{
              marginTop: 4,
              marginBottom: 0,
              fontSize: 15,
              color: COLORS.subText,
              fontFamily: "Pretendard",
            }}>
            그럼 이제 사진 한 장만 보내주세요.
          </p>
        </div>

        <div style={{ display: "grid", gap: 8, marginBottom: 16 }}>
          {[
            { num: "01", text: "가구 사진 1~3장 찍기" },
            { num: "02", text: "지역 + 증상 한 줄 적기" },
            { num: "03", text: "수리 가능 여부 + 비용 범위 안내" },
          ].map((s) => (
            <div
              key={s.num}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: COLORS.card,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 14,
                padding: "12px 14px",
              }}>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 900,
                  color: COLORS.border,
                  fontFamily: "SBAggroB",
                  flexShrink: 0,
                  lineHeight: 1,
                }}>
                {s.num}
              </span>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: COLORS.text,
                  fontFamily: "Pretendard",
                }}>
                {s.text}
              </span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <a
            href="/request"
            style={{
              flex: 2,
              textAlign: "center",
              padding: "14px 14px",
              borderRadius: 14,
              background: COLORS.dark,
              color: "#fff",
              textDecoration: "none",
              fontWeight: 900,
              fontSize: 15,
              fontFamily: "Pretendard",
            }}>
            💬 사진 상담 시작하기
          </a>
          <a
            href="tel:01091273024"
            style={{
              flex: 1,
              textAlign: "center",
              padding: "14px 10px",
              borderRadius: 14,
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              color: COLORS.text,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 14,
              fontFamily: "Pretendard",
            }}>
            📞 전화
          </a>
        </div>

        <div
          style={{
            marginTop: 14,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 10,
          }}>
          {[
            "수리 불가 시 먼저 말씀드립니다",
            "사진으로 1차 판단",
            "비용 범위 먼저 공유",
          ].map((b) => (
            <span
              key={b}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                fontSize: 11,
                color: COLORS.subText,
                fontFamily: "Pretendard",
              }}>
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: COLORS.brand,
                  display: "inline-block",
                }}
              />
              {b}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
