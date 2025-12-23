"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import surirang from "@/public/surirang.png";

const OWNER_PHONE = "01091273024";

// 문자 본문 만들기
function buildSmsBody(v: {
  name: string;
  customerPhone: string;
  address: string;
  symptom: string;
}) {
  return [
    "[수리담 배관교체 상담]",
    `이름: ${v.name}`,
    `연락처: ${v.customerPhone}`,
    `지역(동): ${v.address}`,
    `증상: ${v.symptom}`,
    "",
    "※ 사진은 이 문자에 '첨부'로 같이 보내주세요.",
  ].join("\n");
}

export default function RequestPage() {
  const [name, setName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [address, setAddress] = useState("");
  const [symptom, setSymptom] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [showCopy, setShowCopy] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [errors, setErrors] = useState<{
    name?: string;
    customerPhone?: string;
    address?: string;
    symptom?: string;
  }>({});

  // ▼첫 화면 올리기▼
  useEffect(() => {
    if (submitted) {
      // iOS에서 가끔 키보드/포커스 때문에 스크롤 꼬이는 거 방지
      (document.activeElement as HTMLElement | null)?.blur?.();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [submitted]);
  // ▲첫 화면 올리기▲

  const smsBody = useMemo(
    () => buildSmsBody({ name, customerPhone, address, symptom }),
    [name, customerPhone, address, symptom]
  );

  // iOS/Android 모두에서 무난하게 동작시키려면 보통 sms:NUMBER?&body= 형태가 안정적임
  const smsHref = useMemo(() => {
    return `sms:${OWNER_PHONE}?&body=${encodeURIComponent(smsBody)}`;
  }, [smsBody]);

  const telHref = `tel:${OWNER_PHONE}`;

  if (submitted) {
    return (
      <main style={{ padding: 16, fontFamily: "system-ui" }}>
        <h1
          style={{
            color: "#1119",
            fontSize: 22,
            fontWeight: 700,
            paddingBottom: "10px",
          }}>
          접수 준비 완료
        </h1>

        <div
          style={{
            display: "block",
            padding: "14px 16px",
            border: "1px solid #ddd",
            borderRadius: 12,
            textDecoration: "none",
            color: "#111",
            // textAlign: "center",
          }}>
          {/* 수리랑 ▼ */}
          <div style={{ textAlign: "center", marginTop: 11, marginBottom: 19 }}>
            <Image
              src={surirang}
              alt="수리랑"
              priority
              style={{
                width: "59.119%",
                height: "auto",
                margin: "0 auto",
              }}
            />
          </div>
          {/* 수리랑 ▲ */}

          <h1 style={{ fontSize: 20, fontWeight: 900 }}>
            문자를 기다리는 수리랑
          </h1>

          <p
            style={{
              fontSize: 14.5,
              marginTop: 8,
              color: "#444",
              lineHeight: 1.5,
            }}>
            사진이 있으면 정확도가 크게 올라갑니다.
            <br />
            <b
              style={{
                display: "inline-block",
                fontWeight: 1000,
                background: "black",
                color: "#bbff00ff",
                borderRadius: "6.119px",
                padding: "0 3px",
              }}>
              문자 화면에서 <b>사진 1~3장</b>
            </b>
            을 <b style={{ fontWeight: 900, color: "black" }}>첨부</b> 해
            주세요.
            <br />
            <b
              style={{
                color: "#911",
                lineHeight: 3,
                fontWeight: "100",
                fontSize: 12,
              }}>
              🔥‘문자로 보내기’를 누르면 문자 화면이 열립니다.🔥
            </b>
          </p>
        </div>

        <div style={{ display: "grid", gap: 10, marginTop: 16 }}>
          <a
            href={smsHref}
            style={{
              display: "block",
              padding: "14px 16px",
              background: "#000",
              color: "#fff",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: 800,
              textAlign: "center",
            }}>
            💬 <b style={{ color: "#bbff00ff" }}>문자로 보내기</b>({" "}
            <b>자동작성</b> )
          </a>

          <a
            href={telHref}
            style={{
              display: "block",
              padding: "14px 16px",
              border: "1px solid #ddd",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: 800,
              textAlign: "center",
              color: "#111",
            }}>
            📞 전화로 바로 상담
          </a>
        </div>
        <div
          style={{
            marginTop: 16,
            border: "1px solid #eee",
            borderRadius: 12,
            background: "#fafafa",
            overflow: "hidden",
          }}>
          {/* 헤더 */}
          <button
            type="button"
            onClick={() => setShowCopy((v) => !v)}
            style={{
              width: "100%",
              padding: "12px 14px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontWeight: 800,
            }}>
            <span>보낼 내용 확인하기 </span>
            <span style={{ fontSize: 12, color: "#666" }}>
              {showCopy ? "접기 ▲" : "열기 ▼"}
            </span>
          </button>

          {/* 내용 */}
          {showCopy && (
            <div style={{ padding: 12, borderTop: "1px solid #eee" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 8,
                }}>
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(smsBody);
                      setToast("복사했습니다");
                      setTimeout(() => setToast(null), 1200);
                    } catch {
                      setToast("복사할 수 없습니다 (길게 눌러 복사)");
                      setTimeout(() => setToast(null), 1600);
                    }
                  }}
                  style={{
                    padding: "6px 10px",
                    borderRadius: 10,
                    border: "1px solid #ddd",
                    background: "#fff",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}>
                  복사
                </button>
              </div>

              <pre
                style={{ marginTop: 10, whiteSpace: "pre-wrap", fontSize: 12 }}>
                {smsBody}
              </pre>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                style={{
                  marginTop: 12,
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: 12,
                  border: "1px solid #ddd",
                  background: "#fff",
                  fontWeight: 800,
                  cursor: "pointer",
                }}>
                ← 내용 수정하기
              </button>
            </div>
          )}
        </div>
      </main>
    );
  }

  return (
    <main style={{ padding: 16, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 22, fontWeight: 800 }}>배관 교체 상담</h1>
      <p style={{ marginTop: 8, color: "#444", lineHeight: 1.5 }}>
        사진/정보를 입력하고 제출하면, <br /> 바로{" "}
        <b
          style={{
            display: "inline-block",
            fontWeight: 1000,
            background: "black",
            color: "#bbff00ff",
            borderRadius: "6.119px",
            padding: "0 3px",
          }}>
          문자 자동작성
        </b>
        으로 연결돼요.
      </p>

      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          const next: typeof errors = {};

          if (!name.trim()) next.name = "이름을 입력해 주세요";
          if (!customerPhone.trim())
            next.customerPhone = "연락처를 입력해 주세요";
          if (!address.trim()) next.address = "지역을 입력해 주세요";
          if (!symptom.trim()) next.symptom = "증상을 간단히 적어 주세요";

          setErrors(next);

          // 에러 있으면 제출 막기
          if (Object.keys(next).length > 0) {
            // 첫 에러로 스크롤/포커스(선택)
            return;
          }

          setSubmitted(true);
        }}
        style={{ marginTop: 16, display: "grid", gap: 12 }}>
        <label style={{ display: "grid", gap: 6 }}>
          <b>이름</b>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((prev) => ({ ...prev, name: undefined }));
            }}
            placeholder="홍길동"
            style={{
              padding: "12px 12px",
              border: `1px solid ${errors.name ? "#E5484D" : "#ddd"}`,
              borderRadius: 12,
              outline: "none",
            }}
          />
          {errors.name && (
            <div
              style={{
                marginTop: 6,
                fontSize: 12,
                color: "#E5484D",
                fontWeight: 700,
              }}>
              {errors.name}
            </div>
          )}
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <b>연락처</b>
          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            name="tel"
            value={customerPhone}
            onChange={(e) => {
              setCustomerPhone(e.target.value);
              setErrors((prev) => ({ ...prev, customerPhone: undefined }));
            }}
            placeholder="010-0000-0000"
            style={{
              padding: "12px 12px",
              border: `1px solid ${errors.customerPhone ? "#E5484D" : "#ddd"}`,
              borderRadius: 12,
              outline: "none",
            }}
          />
          {errors.customerPhone && (
            <div
              style={{
                marginTop: 6,
                fontSize: 12,
                color: "#E5484D",
                fontWeight: 700,
              }}>
              {errors.customerPhone}
            </div>
          )}
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <b>지역 (동까지만)</b>
          <span style={{ color: "#777", fontSize: 12 }}>
            상세주소는 상담 후 요청드려요
          </span>

          <input
            name="address"
            autoComplete="address-level2"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setErrors((prev) => ({ ...prev, address: undefined }));
            }}
            placeholder="예) 인천 서구 ○○동"
            style={{
              padding: "12px 12px",
              border: `1px solid ${errors.address ? "#E5484D" : "#ddd"}`,
              borderRadius: 12,
              outline: "none",
            }}
          />

          {errors.address && (
            <div
              style={{
                marginTop: 6,
                fontSize: 12,
                color: "#E5484D",
                fontWeight: 700,
              }}>
              {errors.address}
            </div>
          )}
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <b>요청사항/설명</b>
          <textarea
            value={symptom}
            onChange={(e) => {
              setSymptom(e.target.value);
              setErrors((prev) => ({ ...prev, symptom: undefined }));
            }}
            placeholder="예) 수전 연결부에서 물이 샙니다."
            rows={5}
            style={{
              padding: "12px 12px",
              border: `1px solid ${errors.symptom ? "#E5484D" : "#ddd"}`,
              borderRadius: 12,
              outline: "none",
              resize: "vertical",
            }}
          />
          {errors.symptom && (
            <div
              style={{
                marginTop: 6,
                fontSize: 12,
                color: "#E5484D",
                fontWeight: 700,
              }}>
              {errors.symptom}
            </div>
          )}
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <b>사진(1~3장)</b>
          {/* <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files ?? []);
              setPhotos(files.slice(0, 3));
            }}
          /> */}
          <span style={{ fontSize: 12, color: "#911" }}>
            🔥지금 버전은 사진이 자동으로 전송되진 않아서,🔥 <br />
            🔥제출 후 문자에서 “첨부”로 같이 보내게 안내합니다.🔥
          </span>
        </label>

        <button
          type="submit"
          style={{
            padding: "14px 16px",
            background: "#000",
            color: "#fff",
            borderRadius: 12,
            border: "none",
            fontWeight: 900,
            cursor: "pointer",
          }}>
          제출하고<b style={{ color: "#bbff00ff" }}> 문자 작성</b> 으로 이동
        </button>

        <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>
          <b>개인정보 안내</b>
          <br />
          상담 목적 외 사용하지 않으며, 상담 완료 후 일정 기간 내 파기합니다.
        </div>
      </form>

      {/* ▼ 토스트 */}
      {toast && (
        <div
          style={{
            position: "fixed",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: 18,
            zIndex: 9999,
            width: "min(420px, calc(100vw - 32px))",
            pointerEvents: "none",
          }}>
          <div
            style={{
              background: "rgba(255,255,255,0.92)",
              border: "1px solid #E0E0E0",
              borderRadius: 16,
              padding: "12px 14px",
              boxShadow: "0 18px 46px rgba(0,0,0,0.14)",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "#0E0E0E",
              }}
            />
            <div style={{ fontSize: 13, fontWeight: 900, color: "#111" }}>
              {toast}
            </div>
          </div>
        </div>
      )}
      {/* ▲ 토스트 */}
    </main>
  );
}
