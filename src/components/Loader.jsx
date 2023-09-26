/* eslint-disable react/no-array-index-key */
import React from 'react';

const Loader = () => {
  const items = Array.from({ length: 9 }, (_, index) => index + 1);

  const content = items.map((_, index) => (
    <div
      className="border border-gray-700 rounded-md p-5 grid place-content-between min-h-[10rem]"
      key={index}
    >
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-14 py-1">
          <div>
            <div className="h-3 w-[3rem] mb-3 bg-slate-700 rounded" />
            <div className="space-y-2">
              <div className="h-2 w-[10rem] bg-slate-700 rounded" />
              <div className="h-2 w-[10rem] bg-slate-700 rounded" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-1" />
            <div className="h-2 bg-slate-700 rounded col-span-1" />
          </div>
        </div>
      </div>
    </div>
  ));

  return <>{content}</>;
};

export default Loader;
