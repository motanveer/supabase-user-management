export default function Example() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <main className="relative isolate min-h-full">
          <img
            src="https://images.unsplash.com/photo-1560275619-4662e36fa65c?q=80&w=2700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <p className="text-base font-semibold leading-8 text-white">Thank You!</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Check your email.</h1>
            <p className="mt-4 text-base text-white/70 sm:mt-6">Please check your email for a confirmation link.</p>
            <div className="mt-10 flex justify-center">
              <a href="#" className="text-sm font-semibold leading-7 text-white">
                <span aria-hidden="true">&larr;</span> Back to home
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }
  