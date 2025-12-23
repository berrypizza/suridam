"use client";

import { useMemo, useState } from "react";

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
        <h1 style={{ fontSize: 22, fontWeight: 800 }}>접수 준비 완료</h1>
        <p style={{ marginTop: 8, color: "#444", lineHeight: 1.5 }}>
          아래 <b>문자 보내기</b>를 누르면 내용이 자동으로 작성돼요.
          {photos.length > 0 ? (
            <>
              <br />
              선택한 사진은 <b>문자 화면에서 첨부</b>로 추가해서 보내주세요.
            </>
          ) : (
            <>
              <br />
              사진이 있으면 <b>문자 첨부</b>로 같이 보내주면 더 빨라요.
            </>
          )}
        </p>

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
            💬 문자로 보내기(자동작성)
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
            padding: 12,
            background: "#fafafa",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 8,
            }}>
            <b>보낼 내용(복사용)</b>
            <button
              type="button"
              onClick={async () => {
                await navigator.clipboard.writeText(smsBody);
                alert("복사 완료!");
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

          <pre style={{ marginTop: 10, whiteSpace: "pre-wrap", fontSize: 12 }}>
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
      </main>
    );
  }

  return (
    <main style={{ padding: 16, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 22, fontWeight: 800 }}>배관 교체 상담</h1>
      <p style={{ marginTop: 8, color: "#444", lineHeight: 1.5 }}>
        사진/정보를 입력하고 제출하면, 바로 <b>문자 자동작성</b>으로 연결돼요.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        style={{ marginTop: 16, display: "grid", gap: 12 }}>
        <label style={{ display: "grid", gap: 6 }}>
          <b>이름</b>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="홍길동"
            style={{
              padding: "12px 12px",
              border: "1px solid #ddd",
              borderRadius: 12,
            }}
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <b>연락처</b>
          <input
            inputMode="tel"
            autoComplete="tel"
            name="tel"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            required
            placeholder="010-0000-0000"
            style={{
              padding: "12px 12px",
              border: "1px solid #ddd",
              borderRadius: 12,
            }}
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <b>지역 (동까지만)</b>
          <span style={{ color: "#777", fontSize: 12 }}>
            상세주소는 상담 후 요청드려요
          </span>
          <input
            type="text"
            name="address"
            autoComplete="address-level2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder="예) 인천 서구 또는 인천 서구 ○○동"
            style={{
              padding: "12px 12px",
              border: "1px solid #ddd",
              borderRadius: 12,
            }}
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <b>증상/요청</b>
          <textarea
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
            required
            placeholder="예) 수전 연결부에서 물이 샙니다. 교체 원해요."
            rows={5}
            style={{
              padding: "12px 12px",
              border: "1px solid #ddd",
              borderRadius: 12,
              resize: "vertical",
            }}
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <b>사진(1~3장)</b>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files ?? []);
              setPhotos(files.slice(0, 3));
            }}
          />
          <span style={{ fontSize: 12, color: "#666" }}>
            🔥지금 버전은 사진이 자동으로 전송되진 않아서, 제출 후 문자에서
            “첨부”로 같이 보내게 안내합니다.🔥
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
          제출하고 문자 작성으로 이동
        </button>

        <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>
          <b>개인정보 안내</b>
          <br />
          상담 목적 외 사용하지 않으며, 상담 완료 후 일정 기간 내 파기합니다.
        </div>
      </form>
    </main>
  );
}
