"use client";

import { useReportWebVitals } from "next/web-vitals";

const logWebVitals = (metric: object) => {
  console.log(metric);
};

export default function WebVitalsRegister() {
  useReportWebVitals(logWebVitals);

  return null;
}
