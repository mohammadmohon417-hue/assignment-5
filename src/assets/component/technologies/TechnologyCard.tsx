import { FiStar, FiPlus, FiCheck } from "react-icons/fi";

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
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

export function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md">

      {/* Icon and Badge */}
      <div className="flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 p-2">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          {technology.badge}
        </span>

      </div>

      {/* Name */}
      <h3 className="mt-4 text-lg font-bold text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-15 text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      {/* Category and Difficulty */}
      <div className="mt-4 flex items-center justify-between">

        <span className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500">
          {technology.category}
        </span>

        <span className="text-xs text-gray-500">
          {technology.difficulty}
        </span>

      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-1">
        <FiStar className="fill-yellow-400 text-yellow-400" />

        <span className="text-sm font-semibold">
          {technology.rating}
        </span>
      </div>

      {/* Add Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`btn mt-4 w-full ${
          isAdded
            ? "btn-disabled"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? (
          <>
            <FiCheck />
            Added to Stack
          </>
        ) : (
          <>
            <FiPlus />
            Add to Stack
          </>
        )}
      </button>

    </div>
  );
}