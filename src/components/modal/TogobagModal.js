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
      <button
        aria-label="닫기"
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold outline-none"
        tabIndex={0}
        onClick={onClose}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClose(); }}
      >
        ×
      </button>
      <h2 className="text-xl font-bold mb-2 text-center">매장 운영 정보</h2>
      <div className="text-sm text-gray-700 mb-3 text-center">
        <div className="mb-1">학기중 : <span className="font-semibold">08:50~19:00</span></div>
        <div className="mb-1">방학중 : <span className="font-semibold">09:00~17:30</span></div>
        <div className="text-xs text-gray-500 mt-2">주말 및 공휴일은 휴무이며,<br/>각 매장 상황에 따라 운영시간은 변경될 수 있음.</div>
      </div>
      <div className="w-full overflow-x-auto mt-4">
        <table className="w-full rounded-xl shadow-lg bg-white overflow-hidden text-center text-sm">
          <thead>
            <tr className="bg-blue-50 text-blue-900 font-bold border-b-2 border-blue-200">
              <th className="px-4 py-2">캠퍼스</th>
              <th className="px-4 py-2">매장명</th>
              <th className="px-4 py-2">매장위치</th>
            </tr>
          </thead>
          <tbody>
            {STORE_TABLE.map((row, i) => (
              <tr key={i} className={`transition-colors ${i%2===0 ? 'bg-white' : 'bg-blue-50'} hover:bg-blue-100`}>
                <td className="px-4 py-2 whitespace-nowrap border-b border-blue-100">{row.campus}</td>
                <td className="px-4 py-2 whitespace-nowrap border-b border-blue-100">{row.name}</td>
                <td className="px-4 py-2 whitespace-nowrap border-b border-blue-100">{row.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BaseModal>
  );
}
