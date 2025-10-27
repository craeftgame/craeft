"use client";

import { useEffect } from "react";
import * as ServiceWorker from "./serviceWorker";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    if (typeof navigator !== "undefined") {
      ServiceWorker.register();
      console.log("SW registered!");
    }

    return () => {
      ServiceWorker.unregister();
      console.log("SW unregistered!");
    };
  }, []);

  return null;
}
