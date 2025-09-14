import React from 'react';

export default function Shop() {
  const linkContainerClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#737373] hover:text-[#014421]";

  return (
    <>
      <section className="bg-white py-12 border-b border-soft-mint/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-rich-brown mb-4">
              All Jewelry
            </h1>
            <p className="text-lg text-dark-olive max-w-2xl mx-auto">
              Discover our collection of handcrafted jewelry, each piece telling its own unique story
            </p>
          </div>

          <div dir="ltr" data-orientation="horizontal" className="w-full">
            <div
              role="tablist"
              aria-orientation="horizontal"
              className="h-9 items-center justify-center rounded-lg p-1 text-muted-foreground grid grid-cols-4 w-full max-w-md mx-auto bg-soft-mint/20"
              tabIndex="0"
              data-orientation="horizontal"
              style={{ outline: 'none' }}
            >
              <div className={linkContainerClasses}>
                <a
                  href="/shop"
                  role="tab"
                  aria-selected="true"
                  aria-controls="radix-:rl:-content-all"
                  data-state="active"
                  id="radix-:rl:-trigger-all"
                  tabIndex="-1"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                  data-discover="true"
                >
                  All (6)
                </a>
              </div>

              <div className={linkContainerClasses}>
                <a
                  href="/shop/earrings"
                  role="tab"
                  aria-selected="false"
                  aria-controls="radix-:rl:-content-earrings"
                  data-state="inactive"
                  id="radix-:rl:-trigger-earrings"
                  tabIndex="-1"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                  data-discover="true"
                >
                  Earrings (15)
                </a>
              </div>

              <div className={linkContainerClasses}>
                <a
                  href="/shop/necklace"
                  role="tab"
                  aria-selected="false"
                  aria-controls="radix-:rl:-content-necklace"
                  data-state="inactive"
                  id="radix-:rl:-trigger-necklace"
                  tabIndex="-1"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                  data-discover="true"
                >
                  Necklaces (22)
                </a>
              </div>

              <div className={linkContainerClasses}>
                <a
                  href="/shop/bangles"
                  role="tab"
                  aria-selected="false"
                  aria-controls="radix-:rl:-content-bangles"
                  data-state="inactive"
                  id="radix-:rl:-trigger-bangles"
                  tabIndex="-1"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                  data-discover="true"
                >
                  Bangles (18)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
