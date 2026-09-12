import { use, useState } from "react";
import { Bounce, toast } from "react-toastify";

import { TechnologyCard } from "./TechnologyCard";
import { StackSidebar } from "./StackSidebar";

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

type PromiseType = {
  technologiesPromise: Promise<Technology[]>;
};

export function Technologies({ technologiesPromise }: PromiseType) {
  const technologies = use(technologiesPromise);

  const [stack, setStack] = useState<Technology[]>([]);

  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warn(`${technology.name} is already added!`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleRemove = (id: string | number) => {
    const newStack = stack.filter((technology) => technology.id !== id);

    setStack(newStack);

    toast.info(`technology removed!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleRemoveAll = () => {
    setStack([]);

    toast.info(`All technologies removed!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <section id="technologies" className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore the{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-gray-500">
            Discover the technologies you can use to build your next project.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some((item) => item.id === technology.id)}
                onAdd={handleAdd}
              />
            ))}
          </div>

          <StackSidebar
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
}
