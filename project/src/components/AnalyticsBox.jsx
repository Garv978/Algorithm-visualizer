export default function AnalyticsBox({ stats, type }) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 shadow mt-4 w-full max-w-xl">
      <h2 className="text-lg font-semibold mb-2">Run Analytics</h2>

      {!stats ? (
        <div className="text-gray-500 text-sm">
          No run yet. Press Start to see analytics.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="font-medium">Algorithm:</div>
          <div>{stats.algorithm}</div>

          <div className="font-medium">Time Taken:</div>
          <div>{stats.time} ms</div>

          {type === "grid" && (
            <>
              <div className="font-medium">Nodes Visited:</div>
              <div>{stats.visited}</div>

              <div className="font-medium">Path Length:</div>
              <div>{stats.pathLength}</div>
            </>
          )}
        </div>
      )}
    </div>
  );
}