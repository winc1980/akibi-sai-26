export default function App() {
  const TIME_START = 10;
  const TIME_END = 17;
  const CELL_HEIGHT = 36;

  return (
    <div className="w-full p-20">
      <div className="flex">
        {/* time label */}

        <div className="relative h-full w-12 flex-col justify-start text-[15px] leading-3.5">
          {Array.from({ length: (TIME_END - TIME_START) * 2 + 1 }).map(
            (_, i) => (
              <div
                className="absolute bg-amber-100/20"
                style={{
                  top: i * CELL_HEIGHT,
                }}
                key={i}
              >
                {i % 2 === 0
                  ? `${TIME_START + i / 2}:00`
                  : `${TIME_START + (i - 1) / 2}:30`}
              </div>
            ),
          )}
        </div>

        {/* line */}

        <div className="relative flex w-full flex-col">
          {Array.from({ length: (TIME_END - TIME_START + 1) * 2 - 1 }).map(
            (_, i) => (
              <div
                key={i}
                className={`absolute w-150 border-t ${i % 2 === 0 ? "border-solid" : "border-dashed"}`}
                style={{ top: i * CELL_HEIGHT + 14 / 2 }}
              ></div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
