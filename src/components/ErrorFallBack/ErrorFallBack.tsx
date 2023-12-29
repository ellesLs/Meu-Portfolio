export function ErrorFallBack({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div
      style={{
        margin: '2rem auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center',
      }}
    >
      <h3>Sorry, something went wrong!</h3>
      <pre>{error.message}</pre>

      <button
        style={{ padding: '0.3rem 0.7rem', borderRadius: '0.8rem', border: '1px solid gray' }}
        onClick={resetErrorBoundary}
      >
        Reset
      </button>
    </div>
  );
}
