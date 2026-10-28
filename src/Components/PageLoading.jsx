// Suspense fallback for lazy routes: a visible spinner instead of a blank
// black screen, so a first-visit chunk download reads as loading, not a hang.
function PageLoading() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center gap-4">
      <div
        className="size-10 rounded-full border-4 border-white/20 border-t-primary-orange animate-spin"
        role="status"
        aria-label="Loading page"
      />
      <p className="text-white/70 text-sm">Loading…</p>
    </div>
  );
}

export default PageLoading;
