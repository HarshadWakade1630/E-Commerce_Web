"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Food {
  id: number;
  name: string;
  img: string;
  price: number;
}


export default function PopularFoodScroll() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const res = await axios.get("/api/food");
      setFoods(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <section className="py-6" id="atf">
        <h2 className="mb-3.5 text-[20px] font-semibold text-gray-900">Popular Food Items</h2>

        <div className="flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" id="popularfood">
          {foods.map((food) => (
            <div key={food.id} className="w-[220px] shrink-0 rounded-xl border border-gray-200 bg-white p-3">

              <img src={food.img} alt={food.name} className="mb-2.5 aspect-[1.5/1] w-full rounded-lg bg-gray-200 object-cover object-center" />
              <h4 className="mb-1 text-sm font-semibold text-gray-900">{food.name}</h4>

              <div className="flex items-center justify-between">

                <span className="text-[13px] text-gray-500">${food.price}</span>
                <button className="food-get bg-transparent text-[#ce1f2c] outline-none">
                  <span className="cursor-pointer rounded-bl-[1.2rem] border-b-[1.5px] border-[#f5858e] text-[#f5858e] hover:border-[#ce1f2c] hover:text-[#ce1f2c]">Get</span>
                </button>

              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

