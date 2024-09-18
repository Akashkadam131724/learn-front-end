import {
  useState,
  useEffect,
  useReducer,
  createContext,
  useContext,
} from "react";
import axios from "axios";

// 1. Context for global state
const GlobalDataContext = createContext();

// 2. Global Data Provider using useContext and useEffect
export const GlobalDataProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState(null);
  const [globalLoading, setGlobalLoading] = useState(true);

  useEffect(() => {
    const fetchGlobalData = async () => {
      try {
        const response = await axios.get("/api/global-data");
        setGlobalData(response.data);
      } catch (err) {
        console.error("Global data fetch error", err);
      } finally {
        setGlobalLoading(false);
      }
    };

    fetchGlobalData();
  }, []);

  return (
    <GlobalDataContext.Provider value={{ globalData, globalLoading }}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export const useGlobalData = () => useContext(GlobalDataContext);

// 3. Custom hook for fetching data
const useFetchApi = (url) => {
  const [apiData, setApiData] = useState(null);
  const [apiLoading, setApiLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setApiData(response.data);
      } catch (err) {
        setApiError("API fetch error");
      } finally {
        setApiLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { apiData, apiLoading, apiError };
};

// 4. Reducer for managing complex state
const initialState = {
  reducerData: null,
  reducerLoading: true,
  reducerError: null,
};

const apiReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, reducerData: action.payload, reducerLoading: false };
    case "FETCH_ERROR":
      return { ...state, reducerError: action.payload, reducerLoading: false };
    default:
      return state;
  }
};

// Main component combining everything
function CombinedComponent() {
  // Custom hook usage
  const { apiData, apiLoading, apiError } = useFetchApi("/api/data-endpoint");

  // Reducer hook usage
  const [state, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    const fetchReducerData = async () => {
      try {
        const response = await axios.get("/api/reducer-data");
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } catch (err) {
        dispatch({ type: "FETCH_ERROR", payload: "Reducer data fetch error" });
      }
    };

    fetchReducerData();
  }, []);

  // Context hook usage
  const { globalData, globalLoading } = useGlobalData();

  return (
    <div>
      {/* Custom Hook Section */}
      <h2>Custom Hook Data</h2>
      {apiLoading ? (
        <p>Loading...</p>
      ) : apiError ? (
        <p>{apiError}</p>
      ) : (
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      )}

      {/* Reducer Section */}
      <h2>Reducer Data</h2>
      {state.reducerLoading ? (
        <p>Loading...</p>
      ) : state.reducerError ? (
        <p>{state.reducerError}</p>
      ) : (
        <pre>{JSON.stringify(state.reducerData, null, 2)}</pre>
      )}

      {/* Global Context Section */}
      <h2>Global Data (Context)</h2>
      {globalLoading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(globalData, null, 2)}</pre>
      )}
    </div>
  );
}

export default CombinedComponent;
