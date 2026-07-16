import { Fragment } from "react";

/** Renders a copy string-array as lines separated by <br/>. */
export default function Lines({ text }: { text: readonly string[] }) {
  return (
    <>
      {text.map((line, i) => (
        <Fragment key={line}>
          {i > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </>
  );
}
