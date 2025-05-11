import React, { Suspense, lazy, useEffect } from "react";
import useRickyMartin from "../hooks/useRickyMartin";

const LazyRickyMartinListComponent = lazy(() =>
  import("../components/RickyMartinList/RickyMartinList")
);
const Dashboard = () => {
  const { data, isSuccess, fetchRickyMartinData } = useRickyMartin();

  useEffect(() => {
    fetchRickyMartinData();
  }, []);

  return (
    <div className="dashboard-container">
      {isSuccess && (
        <Suspense fallback={<b>Loading list ...</b>}>
          <LazyRickyMartinListComponent list={data.results} />
        </Suspense>
      )}
    </div>
  );
};
export default Dashboard;
