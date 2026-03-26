import Slider from "../../components/Slider";
import StackBox from "../../components/StackBox";
import { useDataStructureContext } from "../../store/DataStructureContext";
import { useStack } from "../../hooks/DataStructures/UseStack";

export default function Stack() {
  const {
    maxSize,
    setMaxSize,
    inputValue,
    setInputValue,
  } = useDataStructureContext();

  const { stack, pushElement, popElement, resetStack } = useStack(maxSize);

  const boxHeight = 300 / maxSize; // dynamic height

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Stack Visualizer
      </h1>

      <div className="flex gap-10">
        {/* LEFT PANEL */}
        <div className="w-1/3 bg-gray-100 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Controls</h2>

          <input
            type="text"
            placeholder="Enter value"
            className="border border-gray-400 px-4 py-2 rounded-lg w-full mb-4"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button
            onClick={() => {
              pushElement(inputValue);
              setInputValue("");
            }}
            className="bg-green-500 text-white px-6 py-2 rounded-lg w-full mb-3 hover:bg-green-600"
          >
            Push
          </button>

          <button
            onClick={popElement}
            className="bg-red-500 text-white px-6 py-2 rounded-lg w-full mb-3 hover:bg-red-600"
          >
            Pop
          </button>

          <button
            onClick={resetStack}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full mb-6 hover:bg-blue-600"
          >
            Random
          </button>

          <Slider
            label={"Stack Size"}
            value={maxSize}
            setValue={setMaxSize}
            min={5}
            max={20}
          />
        </div>

        {/* RIGHT PANEL */}
        <div className="w-2/3 flex flex-col items-center">
          <div className="flex flex-col-reverse items-center justify-start border-4 border-black h-80 w-48 p-3 bg-gray-50 rounded-lg shadow-inner overflow-hidden">
            
            {stack.map((value, index) => (
              <StackBox key={index} value={value} boxHeight={boxHeight} />
            ))}

          </div>

          <p className="mt-4 text-lg font-semibold">Top</p>
        </div>
      </div>
    </div>
  );
}