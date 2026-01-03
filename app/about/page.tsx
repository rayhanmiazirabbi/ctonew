export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-8 py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
            About Us
          </h1>
          <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
            This is the about page. Here you can learn more about our application and what we do.
          </p>
        </div>
      </main>
    </div>
  );
}
