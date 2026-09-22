import type { JSX } from 'react';

// Placeholder root component. Replaced in WU-9 with the section composition
// (Hero / About / Skills / Projects / Contact / Footer). Kept intentionally
// minimal so PR 1 stays reviewable: strict TS + Tailwind smoke check
// (text-accent uses the placeholder palette token from tailwind.config.js).
function App(): JSX.Element {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <h1 className="text-3xl font-bold text-slate-900">
        JOspitia — Portfolio{' '}
        <span className="text-accent">(PR 1 scaffold)</span>
      </h1>
    </main>
  );
}

export default App;
