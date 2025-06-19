import { Counter } from "@/components";

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos</span>
      <Counter value={5}></Counter>
    </div>
  );
}
