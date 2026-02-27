"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import surirang from "@/public/surirang.png";
import surirangDance from "@/public/suriragn2.png";

const OWNER_PHONE = "01091273024";
const YT_URL = "https://www.youtube.com/shorts/CuHnjj4o-J4";
const BLOG_URL = "https://blog.naver.com/sofaresq";

const COLORS = {
  card: "#FFFFFF",
  text: "#1e1e1e",
  subText: "#7a7a7a",
  border: "#e5e5e5",
  brand: "#2fae8a",
  brand2: "#2e9f83",
  brandBg: "#f0faf6",
  dark: "#1e1e1e",
  error: "#ef4444",
  errorBg: "#fee2e2",
};

function buildSmsBody(v: {
  name: string;
  customerPhone: string;
  address: string;
  symptom: string;
}) {
  return [
    "[수리담 가구수리 상담]",
    `이름: ${v.name}`,
    `연락처: ${v.customerPhone}`,
    `지역(동): ${v.address}`,
    `증상: ${v.symptom}`,
    "",
    "※ 사진은 이 문자에 '첨부'로 1~3장 보내주세요.",
  ].join("\n");
}

const inputStyle = (hasError: boolean): React.CSSProperties => ({
  marginTop: 6,
  padding: "12px 14px",
  width: "100%",
  borderRadius: 12,
  border: `1px solid ${hasError ? COLORS.error : COLORS.border}`,
  fontSize: 15,
  fontFamily: "Pretendard",
  color: COLORS.text,
  background: hasError ? "#fff8f8" : "#fafafa",
  outline: "none",
  boxSizing: "border-box",
});

export default function RequestPage() {
  const [name, setName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [address, setAddress] = useState("");
  const [symptom, setSymptom] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    customerPhone?: string;
    address?: string;
    symptom?: string;
  }>({});
  const [completed, setCompleted] = useState(false);

  const smsBody = useMemo(
    () => buildSmsBody({ name, customerPhone, address, symptom }),
    [name, customerPhone, address, symptom],
  );

  const smsHref = useMemo(
    () => `sms:${OWNER_PHONE}?&body=${encodeURIComponent(smsBody)}`,
    [smsBody],
  );

  return (
    <main style={{ display: "grid", gap: 12 }}>
      {/* ── 캐릭터 + 타이틀 카드 ── */}
      <section
        style={{
          background: COLORS.card,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 22,
          padding: 18,
          boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
          textAlign: "center",
        }}>
        <Image
          src={surirangDance}
          alt="수리랑"
          priority
          style={{ width: "52%", height: "auto", display: "inline-block" }}
        />

        <div style={{ marginTop: 4 }}>
          {/* 신뢰 배지 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 10,
            }}>
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

          <h1
            style={{
              margin: 0,
              fontSize: 22,
              fontWeight: 900,
              color: COLORS.brand,
              fontFamily: "SBAggroB",
            }}>
            문자 수리 리폼 상담
          </h1>
          <p
            style={{
              marginTop: 8,
              marginBottom: 0,
              fontSize: 13,
              color: COLORS.subText,
              lineHeight: 1.6,
              fontFamily: "Pretendard",
            }}>
            정보 입력 후 <b style={{ color: COLORS.text }}>상담 문자 보내기</b>
            를 누르면
            <br />
            문자 앱이 열립니다.{" "}
            <span style={{ color: COLORS.subText }}>(모바일만 가능)</span>
          </p>
        </div>
      </section>

      {/* ── 진행 단계 안내 ── */}
      <div
        style={{
          display: "flex",
          gap: 0,
          borderRadius: 16,
          overflow: "hidden",
          border: `1px solid ${COLORS.border}`,
        }}>
        {[
          { num: "01", text: "아래 정보 입력" },
          { num: "02", text: "문자 보내기 클릭" },
          { num: "03", text: "사진 첨부 후 전송" },
        ].map((s, i) => (
          <div
            key={s.num}
            style={{
              flex: 1,
              textAlign: "center",
              padding: "11px 8px",
              background: i === 0 ? COLORS.brandBg : COLORS.card,
              borderLeft: i > 0 ? `1px solid ${COLORS.border}` : "none",
            }}>
            <div
              style={{
                fontSize: 16,
                fontWeight: 900,
                color: COLORS.border,
                fontFamily: "SBAggroB",
                lineHeight: 1,
              }}>
              {s.num}
            </div>
            <div
              style={{
                marginTop: 4,
                fontSize: 11,
                color: COLORS.subText,
                fontFamily: "Pretendard",
                lineHeight: 1.4,
              }}>
              {s.text}
            </div>
          </div>
        ))}
      </div>

      {/* ── 폼 ── */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const next: typeof errors = {};
          if (!name.trim()) next.name = "이름을 입력해 주세요";
          if (!customerPhone.trim())
            next.customerPhone = "연락처를 입력해 주세요";
          if (!address.trim()) next.address = "지역을 입력해 주세요";
          if (!symptom.trim()) next.symptom = "증상을 적어 주세요";
          setErrors(next);
          if (Object.keys(next).length > 0) return;
          window.location.href = smsHref;
          setCompleted(true);
        }}
        style={{
          background: COLORS.card,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 22,
          padding: 18,
          boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
          display: "grid",
          gap: 14,
        }}>
        {/* 이름 */}
        <label style={{ display: "grid" }}>
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: COLORS.text,
              fontFamily: "Pretendard",
            }}>
            이름
          </span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="홍길동"
            style={inputStyle(!!errors.name)}
          />
          {errors.name && (
            <span
              style={{
                marginTop: 4,
                fontSize: 12,
                color: COLORS.error,
                fontFamily: "Pretendard",
              }}>
              {errors.name}
            </span>
          )}
        </label>

        {/* 연락처 */}
        <label style={{ display: "grid" }}>
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: COLORS.text,
              fontFamily: "Pretendard",
            }}>
            연락처
          </span>
          <input
            type="tel"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            placeholder="010-0000-0000"
            style={inputStyle(!!errors.customerPhone)}
          />
          {errors.customerPhone && (
            <span
              style={{
                marginTop: 4,
                fontSize: 12,
                color: COLORS.error,
                fontFamily: "Pretendard",
              }}>
              {errors.customerPhone}
            </span>
          )}
        </label>

        {/* 지역 */}
        <label style={{ display: "grid" }}>
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: COLORS.text,
              fontFamily: "Pretendard",
            }}>
            지역 (동까지만)
          </span>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="예) 인천 서구 ○○동"
            style={inputStyle(!!errors.address)}
          />
          {errors.address && (
            <span
              style={{
                marginTop: 4,
                fontSize: 12,
                color: COLORS.error,
                fontFamily: "Pretendard",
              }}>
              {errors.address}
            </span>
          )}
        </label>

        {/* 증상 */}
        <label style={{ display: "grid" }}>
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: COLORS.text,
              fontFamily: "Pretendard",
            }}>
            증상 / 요청사항
          </span>
          <textarea
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
            rows={4}
            placeholder="예) 싱크대 상부장이 떨어졌어요"
            style={{ ...inputStyle(!!errors.symptom), resize: "none" }}
          />
          {errors.symptom && (
            <span
              style={{
                marginTop: 4,
                fontSize: 12,
                color: COLORS.error,
                fontFamily: "Pretendard",
              }}>
              {errors.symptom}
            </span>
          )}
        </label>

        {/* 사진 첨부 안내 */}
        <div
          style={{
            borderRadius: 12,
            background: "#fff8f0",
            border: "1px solid #fcd9a0",
            padding: "10px 14px",
          }}>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: "#92400e",
              fontFamily: "Pretendard",
              fontWeight: 600,
              lineHeight: 1.5,
            }}>
            📎 사진은 문자 화면에서 <b>첨부</b>로 보내주세요
          </p>
        </div>

        <button
          type="submit"
          style={{
            padding: 16,
            background: COLORS.brand,
            color: "#fff",
            borderRadius: 14,
            fontWeight: 900,
            fontSize: 17,
            border: "none",
            fontFamily: "SBAggroB",
            cursor: "pointer",
            letterSpacing: -0.3,
          }}>
          📨 상담 문자 보내기
        </button>
      </form>

      {/* ── 완료 오버레이 ── */}
      {completed && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 16,
          }}>
          <div
            style={{
              background: COLORS.card,
              borderRadius: 22,
              padding: 24,
              width: "100%",
              maxWidth: 420,
              textAlign: "center",
              boxShadow: "0 24px 60px rgba(0,0,0,0.2)",
            }}>
            <Image
              src={surirang}
              alt="수리랑"
              style={{ width: "44%", height: "auto", display: "inline-block" }}
            />

            {/* 완료 배지 */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "12px 0 6px",
              }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  background: COLORS.brandBg,
                  border: `1px solid ${COLORS.brand}`,
                  borderRadius: 99,
                  padding: "4px 12px",
                  fontSize: 12,
                  fontWeight: 700,
                  color: COLORS.brand2,
                  fontFamily: "Pretendard",
                }}>
                ✓ 접수 완료
              </span>
            </div>

            <h2
              style={{
                margin: 0,
                fontWeight: 900,
                fontSize: 18,
                fontFamily: "SBAggroB",
                color: COLORS.text,
              }}>
              접수가 완료되었습니다
            </h2>
            <p
              style={{
                marginTop: 6,
                marginBottom: 0,
                fontSize: 14,
                color: COLORS.subText,
                fontFamily: "Pretendard",
              }}>
              수리랑이 확인 중이에요 😊
            </p>
            <p
              style={{
                marginTop: 4,
                marginBottom: 0,
                fontSize: 12,
                color: COLORS.error,
                fontFamily: "Pretendard",
              }}>
              모바일이 아니라면 문자가 보내지지 않아요.
            </p>

            <div style={{ display: "grid", gap: 10, marginTop: 18 }}>
              <a
                href={YT_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "13px 14px",
                  background: COLORS.dark,
                  color: "#fff",
                  borderRadius: 14,
                  fontWeight: 900,
                  textDecoration: "none",
                  fontFamily: "Pretendard",
                  fontSize: 14,
                }}>
                ▶ <span style={{ color: COLORS.brand }}>YouTube</span> 수리담
                영상 보기
              </a>

              <a
                href={BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "13px 14px",
                  background: "#03C75A",
                  color: "#fff",
                  borderRadius: 14,
                  fontWeight: 900,
                  textDecoration: "none",
                  fontFamily: "Pretendard",
                  fontSize: 14,
                }}>
                N 수리담 블로그 보기
              </a>

              <button
                onClick={() => setCompleted(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: COLORS.subText,
                  fontSize: 13,
                  fontFamily: "Pretendard",
                  cursor: "pointer",
                  padding: "6px 0",
                }}>
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
