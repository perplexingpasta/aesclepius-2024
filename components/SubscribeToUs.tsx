import Link from "next/link";

const SubscribeToUs = () => {
  return (
    <>
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="max-w-md">
            {/* <h2 className="text-2xl font-bold dark:text-white md:text-3xl md:leading-tight">
              Subscribe
            </h2> */}
            <p className="text-xl font-medium text-black-100 dark:font-normal dark:text-white md:text-2xl">
              Subscribe to our newsletter for the latest updates in the
              dermatology community 🪄
            </p>
          </div>
          <form>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-1.5 dark:border-neutral-700 sm:flex-row">
              <div className="relative w-full">
                <label htmlFor="hero-input" className="sr-only">
                  Subscribe
                </label>
                <div className="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-3">
                  <svg
                    className="size-4 shrink-0 text-gray-400 dark:text-neutral-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="hero-input"
                  name="hero-input"
                  className="block w-full rounded-lg border-transparent py-2 pe-3 ps-9 text-sm text-gray-700 focus:border-transparent focus:ring-transparent disabled:pointer-events-none disabled:opacity-50 dark:bg-black-100 dark:text-neutral-300 dark:placeholder-neutral-500 "
                  placeholder="Enter your email"
                />
              </div>
              <Link
                className="inline-flex w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-md border border-transparent bg-black-100 px-2.5 py-2 text-sm font-semibold text-white hover:bg-violet-500 focus:bg-violet-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-neutral-800 dark:hover:bg-violet-300 sm:w-auto"
                href="#"
              >
                Join
                <svg
                  className="size-3.5 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
            <p className="mt-2 text-sm text-gray-700 dark:text-neutral-500">
              No spam. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SubscribeToUs;
