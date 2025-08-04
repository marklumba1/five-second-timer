import { useContext } from "react";
import useCountdown from "./useCountdown";
import { Context } from "./main";

const App: React.FC = () => {
  const initialTime = useContext(Context);
  const { time, seconds, handleStart, handlePause, handleReset } =
    useCountdown(initialTime);
  return (
    <div className="bg-teal-900 flex text-center flex-col gap-10 justify-center items-center h-screen w-screen text-teal-100 px-4">
      <p className="text-sm max-w-100 text-teal-300 italic">
        This timer uses React hooks including <strong>useState</strong>,{" "}
        <strong>useEffect</strong>, <strong>useRef</strong>,{" "}
        <strong>useCallback</strong>, <strong>useContext</strong>, and a custom
        hook <strong>useCountdown</strong> for clean, reusable logic.
      </p>
      <p className="text-sm text-teal-400">
        View the code on{" "}
        <a
          href="https://github.com/marklumba1/five-second-timer"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-teal-200 transition"
        >
          GitHub
        </a>
      </p>
      <p className="text-6xl font-mono font-bold tracking-widest">
        {seconds}s <span className="block text-3xl">{time}ms</span>
      </p>
      <div className="flex gap-4 justify-center">
        <button
          onClick={handleStart}
          className="bg-teal-700 hover:bg-teal-600 px-6 py-2 rounded-xl transition font-semibold shadow-md"
        >
          Start
        </button>
        <button
          onClick={handlePause}
          className="bg-yellow-600 hover:bg-yellow-500 px-6 py-2 rounded-xl transition font-semibold shadow-md"
        >
          Pause
        </button>
        <button
          onClick={handleReset}
          className="bg-red-700 hover:bg-red-600 px-6 py-2 rounded-xl transition font-semibold shadow-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
