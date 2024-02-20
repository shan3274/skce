import { useEffect, useState } from "react";

export default function useMedia(queries, values, defaultValue) {
  const isClient = typeof window !== "undefined"; // Check if window is defined

  const match = () => {
    if (isClient) {
      return (
        values[queries.findIndex((q) => window.matchMedia(q).matches)] ||
        defaultValue
      );
    }
    return defaultValue;
  };

  const [value, set] = useState(match);

  useEffect(() => {
    const handler = () => set(match);
    if (isClient) {
      window.addEventListener("resize", handler);
      return () => window.removeEventListener("resize", handler);
    }
  }, [isClient]);

  return value;
}
