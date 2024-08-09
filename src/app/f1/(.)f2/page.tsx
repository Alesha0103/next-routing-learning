const InterceptedF2 = () => {
  return <h1>(.) Intercepted F2 page</h1>;
}

export default InterceptedF2;

// (.) to match segments on the same level
// (..) to match segments one level above
// (..)(..) to match segments two levels above ( does not work quite )
// (...) to match segments from the root app directoty

// https://www.youtube.com/watch?v=nr_kRfTJfKc&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=33