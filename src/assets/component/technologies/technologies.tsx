import { use, useState } from "react";
import { toast } from "react-toastify";

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

export function Technologies({
  technologiesPromise,
}: PromiseType) {

  const technologies = use(technologiesPromise);

  const [stack, setStack] = useState<Technology[]>([]);

  
  const handleAdd = (technology: Technology) => {

    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning("This technology is already added!");
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };


 
  const handleRemove = (id: string | number) => {

    const newStack = stack.filter(
      (technology) => technology.id !== id
    );

    setStack(newStack);

    toast.info("Technology removed!");
  };


  
  const handleRemoveAll = () => {

    setStack([]);

    toast.info("All technologies removed!");
  };


  return (
    <section
      id="technologies"
      className="w-full bg-white py-16"
    >

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

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {technologies.map((technology) => (

              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some(
                  (item) => item.id === technology.id
                )}
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