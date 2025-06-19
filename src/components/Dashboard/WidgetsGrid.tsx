'use client'
import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget
        title="Counter"
        subTitle="Added products"
        label={`${count}`}
        icon={<IoCartOutline size={40} className="text-blue-600"></IoCartOutline>}
        href="/dashboard/counter"
      ></SimpleWidget>
    </div>
  );
};
