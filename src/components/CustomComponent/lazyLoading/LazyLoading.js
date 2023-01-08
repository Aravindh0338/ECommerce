import { lazy } from "react";

export function LazyLoading(path, namedExport) {
  return lazy(() => {
    if (!namedExport) {
      return path();
    } else {
      return path().then((module) => ({ default: module[namedExport] }));
    }
  });
}
