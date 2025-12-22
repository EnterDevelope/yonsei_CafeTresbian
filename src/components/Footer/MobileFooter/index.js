import React from 'react';

const infoRows = [
  '상호명: 연세대학교 생활협동조합 | 이사장: 김용호 | 개인정보관리책임자 : 권훈',
  '사업자번호 : 890-82-00336 | 통신판매업신고 : 2021-서울서대문-0417 | TEL : 02-2123-4022 | FAX : 02-312-0471',
  '사업장주소 : 서울특별시 서대문구 연세로 50 학생회관 1층 연세대학교 생활협동조합 (주)037722',
  'Email : yonseicoop@yonsei.ac.kr',
  '운영 시간: 평일 08:00 - 19:00 (주말 및 공휴일 휴무)',
  '위치: 연세대학교 학생회관 1층',
];

const MobileFooter = () => {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto flex w-full max-w-content-lg flex-col gap-8 px-4 py-10">
        <div className="flex flex-col items-start gap-3">
          <img
            src={`${process.env.PUBLIC_URL}/company_logo.png`}
            alt="연세대학교 생활협동조합"
            className="h-10 w-auto"
          />
          <p className="text-xs font-semibold text-slate-400">연세대학교 생활협동조합 운영</p>
        </div>
        <div className="space-y-2 text-xs leading-relaxed text-slate-300">
          {infoRows.map((row) => (
            <p key={row}>{row}</p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
