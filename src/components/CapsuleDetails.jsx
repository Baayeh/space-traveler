/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import { Dialog } from 'primereact/dialog';
import React from 'react';

const CapsuleDetails = ({
  visible,
  setVisible,
  capsule,
}) => (
  <Dialog
    header="Capsule Details"
    visible={visible}
    onHide={() => setVisible(false)}
    draggable={false}
    resizable={false}
    blockScroll={false}
    maskClassName="mask"
    id="dialog"
  >
    <div className="flex justify-between items-center">
      <div className="flex flex-col sm:flex-row sm:items-center gap-x-10 gap-y-4">
        <div>
          <h3 className="uppercase text-xs text-gray-400">Capsule ID</h3>
          <p className="text-white">{capsule?.capsule_id}</p>
        </div>
        <div>
          <h3 className="uppercase text-xs text-gray-400">
            Capsule Serial Number
          </h3>
          <p className="text-white">{capsule?.capsule_serial}</p>
        </div>
        <div>
          <h3 className="uppercase text-xs text-gray-400">Capsule type</h3>
          <p className="text-white">{capsule?.type}</p>
        </div>
      </div>
      <div>
        <span
          className={`${
            capsule?.status === 'active'
              ? 'bg-green-500'
              : capsule?.status === 'retired'
                ? 'bg-orange-400'
                : capsule?.status === 'unknown'
                  ? 'bg-indigo-500'
                  : 'bg-red-500'
          } rounded-full text-sm px-3 py-1 font-semibold text-gray-900 mt-2 inline-block`}
        >
          {capsule?.status}
        </span>
      </div>
    </div>
    <div className="my-5 sm:my-10">
      <h3 className="uppercase text-xs text-gray-400">Capsule Info</h3>
      <p className="text-white">
        {capsule?.details ? capsule?.details : 'Not available'}
      </p>
    </div>
    <div className="flex items-center gap-x-10 flex-wrap">
      <div className="mb-10">
        <h3 className="uppercase text-xs text-gray-400">
          Capsule Original Launch
        </h3>
        <p className="text-white">{capsule?.original_launch}</p>
      </div>

      <div className="mb-10">
        <h3 className="uppercase text-xs text-gray-400">Capsule Landings</h3>
        <p className="text-white">{capsule?.landings}</p>
      </div>
      <div className="mb-10">
        <h3 className="uppercase text-xs text-gray-400">
          Capsule Reuse Count
        </h3>
        <p className="text-white">{capsule?.reuse_count}</p>
      </div>
    </div>
    <div>
      <h3 className="uppercase text-xs text-gray-400">Capsule Missions</h3>
      <table className="w-full border border-gray-700 mt-2">
        <thead role="rowgroup">
          <tr className="text-left bg-slate-300 dark:bg-slate-700" role="row">
            <th role="columnheader">Name</th>
            <th role="columnheader" className="hidden xl:table-cell">
              Flight
            </th>
          </tr>
        </thead>
        <tbody role="rowgroup">
          {capsule?.missions.length === 0 ? (
            <tr role="row">
              <td colSpan={2} className="text-center" role="cell">
                No missions available
              </td>
            </tr>
          ) : (
            capsule?.missions.map((mission) => (
              <tr key={mission.name} role="row">
                <td role="cell">{mission.name}</td>
                <td role="cell" className="hidden xl:table-cell">
                  {mission.flight}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </Dialog>
);

export default CapsuleDetails;
