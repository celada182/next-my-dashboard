"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, init, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
  value: number;
}

interface CounterResponse {
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter").then((res) => res.json());
  return data;
};

export const Counter = ({ value = 0 }: Props) => {
  //const [count, setCount] = useState(0);

  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(init(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then((data) => dispatch(init(data.count)));
  }, [dispatch]);

  return (
    <div>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-300 transition-all w-[100px] mr-2"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
        <button
          className="flex items-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-300 transition-all w-[100px] mr-2"
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>
      </div>
    </div>
  );
};
