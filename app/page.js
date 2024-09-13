"use-client";

export default function Home() {
  return (
    <>
      <div className="p-6 md:p-9">
        <div className="border-b pb-6 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Ferry Operators</h1>
            <p>
              Discover the <strong>57 ferry operators</strong> we work with
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="px-4 py-2 bg-[#00afd4] text-white font-semibold rounded-md hover:bg-white hover:text-[#00afd4] hover:border hover:border-[#00afd4]">
             {"> " + " Book your tickets"}
            </button>
          </div>
        </div>

        <div className="border-b pb-6 mb-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4 flex-wrap">
            <button className="px-4 bg-gray-200 rounded-md mt-4">
              Filters
            </button>
            <div className="mt-4">
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option> Sort by: Reviews Number (high first)</option>
              </select>
            </div>
            <button className="px-4 mt-4 bg-gray-200 rounded-md flex justify-around items-center gap-2">
              <img src="/images/input-search.png" alt="" />
              <div>
              Search
              </div>
              </button>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="px-4 py-2 text-[#00afd4] border border-[#00afd4] font-normal rounded-md hover:bg-[#00afd4] hover:text-white">
              Live Map View
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="first-section w-full md:w-3/12 p-3">
            <div className="p-4 border border-gray-300 rounded-md">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button className="text-gray-400 hover:text-gray-600">
                  <img src="/images/close-Icon.png" alt="" />
                </button>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Operating in
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>  Select a country</option>
                </select>
              </div>

              <div className="mt-4">
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  Ferry types
                </span>
                <div className="flex flex-col space-y-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">Normal ferries</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">
                      High-speed ferries
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="second-section w-full md:w-9/12 p-3">
            <div className="border border-gray-300 rounded-md">
              <div className="p-4 flex flex-col  bg-slate-100 md:flex-row justify-between items-center mb-4">
                <div className="logo md:w-52 w-full">
                  <img src="/images/BlueStar.png" className="w-full h-auto" />
                </div>
                <div className="text-center md:text-right">
                  <h3 className="text-lg font-semibold">Blue Star Ferries</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-yellow-500 text-sm font-medium mr-1">
                      ★★★★☆
                    </span>
                    <span className="text-sm text-gray-500">
                      by 1,342 customers
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 flex flex-col md:flex-row">
                <div className="w-full md:w-4/12 mb-4 md:mb-0">
                  <div className="text-sm mb-2">
                    <strong>Operates In:</strong> <div>Greece</div>
                  </div>
                  <div className="text-sm mb-2">
                    <strong>Vessels No:</strong> 10
                  </div>

                  <div className="text-sm mb-2">
                    <strong>Ferry types:</strong> 8 normal
                  </div>
                  <div className="text-sm">
                    <strong>Popular Vessels:</strong>
                    <div className="text-[#00afd4]">
                      Blue Star Delos, Blue Star Nexos
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-8/12 text-gray-600">
                  <p className="md:ps-11">
                    Blue Star Ferries is currently the biggest ferry company in
                    Greece. It is a member of Attica Group, one of the most
                    significant companies in the Greek shipping industry. Its
                    fleet consists of vessels of the latest technology and
                    serves itineraries starting from the port of Piraeus...
                  </p>
                </div>
              </div>

              <div className="border-t mt-4 pt-2 flex justify-end m-2">
                <button className="text-[#00afd4] bg-slate-100 hover:underline px-2 rounded-lg">
                  More About Blue Star Ferries   <span className="ml-2">→</span>
                </button>
              </div>
            </div>

            <div className="my-10 border border-gray-300 rounded-md">
              <div className="flex p-4 bg-slate-100 flex-col md:flex-row justify-between items-center mb-4">
                <div className="logo md:w-52 w-full">
                  <img src="/images/seaJets.png" className="w-full h-auto" />
                </div>
                <div className="text-center md:text-right">
                  <h3 className="text-lg font-semibold">Seajets</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-yellow-500 text-sm font-medium mr-1">
                      ★★★★☆
                    </span>
                    <span className="text-sm text-gray-500">
                      by 1,342 customers
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 flex flex-col md:flex-row">
                <div className="w-full md:w-4/12 mb-4 md:mb-0">
                  <div className="text-sm mb-2">
                    <strong>Operates In:</strong>
                    <div>Greece</div>
                  </div>
                  <div className="text-sm mb-2">
                    <strong>Vessels No:</strong> 10
                  </div>
                  <div className="text-sm mb-2">
                    <strong>Ferry type:</strong> 10 normal and 7 high-speed
                    ferries
                  </div>
                  <div className="text-sm">
                    <strong>Popular Vessels:</strong>
                    <div className="text-[#00afd4]">
                      WorldChampion Jet, Seajet 2
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-8/12 text-gray-600">
                  <p className="md:ps-11">
                    Seajets is the biggest company of high-speed vessels of the
                    Aegean Sea. It is a joint venture of speedboats that was
                    initially founded in 1989 to provide shipping services. The
                    company's passenger ferries have been connecting over 26
                    destinations in the Aegean Sea since 2002. Their fleet
                    consists of 14 high-speed catamarans and 3 conventional
                    ones, with a speed of up to 50 knots. Seajets connect the
                    main ports of Athens (Piraeus, Rafina and Lavrion), other
                    parts of the mainland (Thessaloniki, Kavala, Peloponnese)
                    and...
                  </p>
                </div>
              </div>

              <div className="border-t mt-4 pt-2 flex justify-end m-2">
                <button className="text-[#00afd4] bg-slate-100 hover:underline px-2 rounded-lg">
                  More About Seajets  <span className="ml-2">→</span>
                </button>
              </div>
            </div>

            <div className="border border-gray-300 rounded-md">
              <div className="p-4 bg-slate-100 flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="logo md:w-52 w-full">
                  <img src="/images/Anek.png" className="w-full h-auto" />
                </div>
                <div className="text-center md:text-right">
                  <h3 className="text-lg font-semibold">Anek - Superfast</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-yellow-500 text-sm font-medium mr-1">
                      ★★★★☆
                    </span>
                    <span className="text-sm text-gray-500">
                      by 1,342 customers
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 flex flex-col md:flex-row">
                <div className="w-full md:w-4/12 mb-4 md:mb-0">
                  <div className="text-sm mb-2">
                    <strong>Operates In:</strong> <div>Greece, Italy</div>
                  </div>
                  <div className="text-sm mb-2">
                    <strong>Vessels No:</strong> 10
                  </div>
                  <div className="text-sm mb-2">
                    <strong>Ferry types:</strong> normal ferries
                  </div>

                  <div className="text-sm">
                    <strong>Popular Vessels:</strong>
                    <div className="text-[#00afd4]">
                      Superfast XII, superfast XI
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-8/12 text-gray-600">
                  <p className="md:ps-11">
                    Anek-Superfast is a joint venture between Anek Lines and
                    Superfast Ferries that serves mainly the route between
                    Greece and Italy. Anek Lines is one of the oldest ferry
                    companies in Greece, founded in 1967, and the joint venture
                    is one of the most popular options for traveling between the
                    two countries. With over 50 years of experience, they
                    operate one of the largest and most modern fleets, offering
                    high-quality services with speed and comfort...
                  </p>
                </div>
              </div>

              <div className="border-t mt-4 pt-2 flex justify-end m-2">
                <button className="text-[#00afd4] bg-slate-100 hover:underline px-2 rounded-lg">
                  More About Anek - Superfast  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
