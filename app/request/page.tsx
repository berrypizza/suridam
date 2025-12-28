"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import surirang from "@/public/surirang.png";
import surirangDance from "@/public/suriragn2.png";

const OWNER_PHONE = "01091273024";
const YT_URL = "https://www.youtube.com/shorts/CuHnjj4o-J4";
const BLOG_URL = "https://blog.naver.com/sofaresq"; // 나중에 메인 글로 변경하기
const COLORS = {
  card: "#FFFFFF",
  text: "#111111",
  subText: "#777777",
  border: "#E0E0E0",
  accent: "#0E0E0E",
};

// 문자 본문 만들기
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
    [name, customerPhone, address, symptom]
  );

  const smsHref = useMemo(
    () => `sms:${OWNER_PHONE}?&body=${encodeURIComponent(smsBody)}`,
    [smsBody]
  );

  return (
    <main style={{ padding: 16, fontFamily: "system-ui" }}>
      {/* 헤더 카드 */}
      <div style={{ textAlign: "center" }}>
        <Image
          src={surirangDance}
          alt="수리랑"
          priority
          style={{
            width: "56%",
            height: "auto",
            display: "inline-block",
          }}
        />
      </div>

      <div
        style={{
          background: "#fafafa",
          border: `1px solid ${COLORS.border}`,
          borderRadius: 22,
          padding: 16,
          boxShadow: "0 14px 40px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}>
        <h1
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: "#444",
            borderRadius: 8,
          }}>
          문자 수리 상담
        </h1>
        <p
          style={{
            marginTop: 10,
            color: "#444",
            lineHeight: 1.5,
            textAlign: "left",
          }}>
          정보 입력 후 <b>상담 문자 보내기</b>를 누르면 문자 앱이 열립니다.{" "}
          (모바일만 가능합니다)
        </p>
      </div>

      {/* 폼 */}
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

          // 👉 문자 앱 열기
          window.location.href = smsHref;

          // 👉 동시에 완료 오버레이 표시
          setCompleted(true);
        }}
        style={{
          marginTop: 16,
          background: COLORS.card,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 22,
          padding: 16,
          boxShadow: "0 14px 40px rgba(0,0,0,0.08)",
          display: "grid",
          gap: 12,
        }}>
        {/* 이름 */}
        <label>
          <b>이름</b>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="홍길동"
            style={{
              marginTop: 6,
              padding: 12,
              width: "100%",
              borderRadius: 12,
              border: `1px solid ${errors.name ? "#E5484D" : "#ddd"}`,
            }}
          />
          {errors.name && (
            <div style={{ color: "#E5484D", fontSize: 12 }}>{errors.name}</div>
          )}
        </label>

        {/* 연락처 */}
        <label>
          <b>연락처</b>
          <input
            type="tel"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            placeholder="010-0000-0000"
            style={{
              marginTop: 6,
              padding: 12,
              width: "100%",
              borderRadius: 12,
              border: `1px solid ${errors.customerPhone ? "#E5484D" : "#ddd"}`,
            }}
          />
          {errors.customerPhone && (
            <div style={{ color: "#E5484D", fontSize: 12 }}>
              {errors.customerPhone}
            </div>
          )}
        </label>

        {/* 지역 */}
        <label>
          <b>지역 (동까지만)</b>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="예) 인천 서구 ○○동"
            style={{
              marginTop: 6,
              padding: 12,
              width: "100%",
              borderRadius: 12,
              border: `1px solid ${errors.address ? "#E5484D" : "#ddd"}`,
            }}
          />
        </label>

        {/* 증상 */}
        <label>
          <b>증상 / 요청사항</b>
          <textarea
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
            rows={4}
            placeholder="예) 싱크대 문짝이 떨어졌어요"
            style={{
              marginTop: 6,
              padding: 12,
              width: "100%",
              borderRadius: 12,
              border: `1px solid ${errors.symptom ? "#E5484D" : "#ddd"}`,
            }}
          />
        </label>

        <div style={{ fontSize: 12, color: "#911" }}>
          ※ 사진은 문자 화면에서 <b>첨부</b>로 보내주세요
        </div>

        <button
          type="submit"
          style={{
            padding: 16,
            background: "#000",
            color: "#bbff00",
            borderRadius: 14,
            fontWeight: 900,
            fontSize: 18,
            border: "none",
          }}>
          📨 상담 문자 보내기
        </button>
      </form>

      {/* ✅ 완료 오버레이 */}
      {completed && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 16,
          }}>
          <div
            style={{
              background: "#fff",
              borderRadius: 22,
              padding: 20,
              width: "100%",
              maxWidth: 420,
              textAlign: "center",
            }}>
            <Image
              src={surirang}
              alt="수리랑"
              style={{ width: "50%", height: "auto", display: "inline-block" }}
            />
            <h2 style={{ marginTop: 12, fontWeight: 900, fontSize: "18px" }}>
              접수가 완료되었습니다
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#555",
                marginTop: 6,
                fontWeight: 600,
              }}>
              수리랑이 확인 중이에요 😊
            </p>
            <p
              style={{
                fontSize: 12,
                color: "#911",
                marginTop: 6,
              }}>
              모바일이 아니라면, 문자가 보내지지 않아요.{" "}
            </p>

            <div style={{ display: "grid", gap: 10, marginTop: 16 }}>
              <a
                href={YT_URL}
                target="_blank"
                style={{
                  padding: 12,
                  background: "#000",
                  color: "#bbff00",
                  borderRadius: 14,
                  fontWeight: 900,
                  textDecoration: "none",
                }}>
                ▶ 수리담 유튜브 보기
              </a>

              <a
                href={BLOG_URL}
                target="_blank"
                style={{
                  padding: 12,
                  border: "1px solid #ddd",
                  borderRadius: 14,
                  fontWeight: 900,
                  textDecoration: "none",
                  color: "#111",
                }}>
                ✍️ 수리담 블로그 보기
              </a>

              <button
                onClick={() => setCompleted(false)}
                style={{
                  marginTop: 6,
                  background: "transparent",
                  border: "none",
                  color: "#666",
                  fontSize: 13,
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
