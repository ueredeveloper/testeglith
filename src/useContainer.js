import { useEffect, useState } from "react";

export const useContainer = ({ container, divContainerRef }) => {
  useEffect(() => {
    container = divContainerRef.current;
  }, []);

  return container;
};
