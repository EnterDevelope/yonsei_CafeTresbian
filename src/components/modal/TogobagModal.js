import React from 'react';
import BaseModal from './BaseModal';
import { MODAL_CONTAINER_CLASS } from './modalClassNames';

const STORE_TABLE = [
  { campus: '고를샘', name: '트레비앙 (고를샘)', location: '학생회관 1F' },
  { campus: '솟을샘', name: '트레비앙 (솟을샘)', location: '중앙도서관 B1' },
  { campus: '종합관', name: '트레비앙 (종합관)', location: '교육과학관 1F' },
  { campus: '음악대학', name: '트레비앙 (음악대학)', location: '음악관 1F' },
  { campus: '광복관', name: '트레비앙 (광복관)', location: '광복관 B1' },
  { campus: '청경관', name: '트레비앙 (청경관)', location: '위당관 B1' },
];

export default function TogobagModal({ isOpen, onClose }) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} className={MODAL_CONTAINER_CLASS}>
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
              To-go Info
            </p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">매장 운영 정보</h3>
            <p className="mt-2 text-sm text-slate-500">
              학기중 08:50~19:00 · 방학중 09:00~17:30 (주말/공휴일 휴무)
            </p>
          </div>
          <button
            type="button"
            aria-label="닫기"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-2xl text-slate-500 shadow-sm"
          >
            ×
          </button>
        </div>
        <div className="overflow-x-auto rounded-[24px] border border-slate-100">
          <table className="min-w-full divide-y divide-slate-100 text-sm">
            <thead className="bg-slate-50 text-left font-semibold text-slate-600">
              <tr>
                <th className="px-4 py-3">캠퍼스</th>
                <th className="px-4 py-3">매장명</th>
                <th className="px-4 py-3">위치</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {STORE_TABLE.map((row) => (
                <tr key={row.campus}>
                  <td className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">
                    {row.campus}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{row.name}</td>
                  <td className="px-4 py-3 text-slate-600">{row.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-xs text-slate-500">
          각 매장 상황에 따라 운영시간은 변동될 수 있습니다.
        </p>
      </div>
    </BaseModal>
  );
}
