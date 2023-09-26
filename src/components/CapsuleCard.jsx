/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineMinusCircle,
  AiOutlineQuestionCircle,
} from 'react-icons/ai';
import { FaRegCircleDot } from 'react-icons/fa6';

const CapsuleCard = ({ capsule, showCapsuleDialog }) => (
  <div
    className="border border-gray-700 rounded-md p-5 grid place-content-between min-h-[10rem] hover:cursor-pointer hover:border-gray-100 transition-colors duration-300 ease-in-out"
    onClick={() => showCapsuleDialog(capsule)}
  >
    <div>
      <h2 className="font-bold">{capsule.capsule_serial}</h2>
      <p role="paragraph" className="text-gray-400 text-sm">
        {capsule.details ? capsule.details : 'Not available'}
      </p>
    </div>

    <div className="mt-3 flex items-center gap-x-5">
      <div
        className="flex items-center gap-x-1 text-sm cursor-default"
        title="Status"
      >
        <span
          className={`${
            capsule.status === 'active'
              ? 'text-green-500'
              : capsule.status === 'retired'
                ? 'text-orange-400'
                : capsule.status === 'unknown'
                  ? 'text-indigo-500'
                  : 'text-red-500'
          }`}
        >
          {capsule.status === 'active' ? (
            <AiOutlineCheckCircle />
          ) : capsule.status === 'retired' ? (
            <AiOutlineMinusCircle />
          ) : capsule.status === 'unknown' ? (
            <AiOutlineQuestionCircle />
          ) : (
            <AiOutlineCloseCircle />
          )}
        </span>
        <span className="capitalize text-gray-400">{capsule.status}</span>
      </div>
      <div
        className="flex items-center gap-x-1 text-sm cursor-default"
        title="Type"
      >
        <span>
          <FaRegCircleDot />
        </span>
        <span className="capitalize text-gray-400">{capsule.type}</span>
      </div>
    </div>
  </div>
);

export default CapsuleCard;

// active, retired, unknown, destroyed;
