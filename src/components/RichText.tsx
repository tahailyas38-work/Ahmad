import type { TextRun } from "../content/site";

export function RichText({ runs }: { runs: TextRun[] }) {
  return runs.map((run, index) =>
    run.emphasis ? (
      <strong key={index}>{run.text}</strong>
    ) : (
      <span key={index}>{run.text}</span>
    ),
  );
}
