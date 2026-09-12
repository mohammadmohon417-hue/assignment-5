import { FiX, FiTrash2 } from "react-icons/fi";

type Technology = {
  id: string | number;
  name: string;
  category: string;
  icon: string;
  badge: string;
  description: string;
  rating: number | string;
  difficulty: string;
};

type Props = {
  stack: Technology[];
  onRemove: (id: string | number) => void;
  onRemoveAll: () => void;
};

export function StackSidebar({ stack, onRemove, onRemoveAll }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-gray-100 p-5">
        <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>

        <p className="mt-1 text-sm text-gray-500">
          {stack.length} Technologies Selected
        </p>
      </div>

      {/* Stack Content */}
      <div className="p-4">
        {stack.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-200 p-8 text-center">
            <p className="font-semibold text-gray-700">Your stack is empty</p>

            <p className="mt-2 text-sm text-gray-400">
              Add technologies to build your stack.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-lg border border-gray-100 p-3"
              >
                {/* Icon */}
                <div className="h-10 w-10 rounded-lg bg-gray-50 p-2">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Name */}
                <div className="flex-1">
                  <h4 className="text-sm font-bold">{technology.name}</h4>

                  <p className="text-xs text-gray-400">{technology.category}</p>
                </div>

                {/* Remove X */}
                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <FiX />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Remove All Button */}
        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
          >
            <FiTrash2 />
            Remove All
          </button>
        )}
      </div>
    </div>
  );
}
