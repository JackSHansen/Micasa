import * as React from "react";
import styles from "./gridcontainer.module.scss";

export default function GridContainer({ children }: { children: React.ReactNode }) {
  return React.createElement("div", { className: styles["grid-container"] }, children);
}