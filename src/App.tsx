import type { JSX } from 'react';

// Placeholder root component. Replaced in WU-9 with the section composition
// (Hero / About / Skills / Projects / Contact / Footer). Kept intentionally
// minimal so PR 1 stays reviewable: strict TS, no app logic.
function App(): JSX.Element {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-slate-900">
      <h1 className="text-3xl font-bold">JOspitia — Portfolio (PR 1 scaffold)</h1>
    </main>
  );
}

export default App;
