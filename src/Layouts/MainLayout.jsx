 
 
function MainLayout() {
  return (
    <div id="webcrumbs" className="font-sans text-base leading-6">
      <div className="w-[1200px] min-h-[800px] bg-neutral-50 shadow-lg rounded-lg mx-auto">
        <header className="bg-neutral-800 text-neutral-50 px-8 py-4 rounded-t-lg">
          <h1 className="text-4xl font-title">Netflix</h1>
        </header>

        <nav className="bg-neutral-700 p-4">
          <ul className="flex space-x-8">
            <li className="text-neutral-50">Home</li>
            <li className="text-neutral-400">TV Shows</li>
            <li className="text-neutral-400">Movies</li>
            <li className="text-neutral-400">Latest</li>
            <li className="text-neutral-400">My List</li>
          </ul>
        </nav>

        <main className="p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-title mb-4">Trending Now</h2>
            <div className="grid grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="relative rounded-md overflow-hidden">
                  <img
                    src={`https://tools-api.webcrumbs.org/image-placeholder/200/300/action/${i}`}
                    alt={`Movie ${i}`}
                    width={200}
                    height={300}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-title mb-4">New Releases</h2>
            <div className="grid grid-cols-5 gap-4">
              {[6, 7, 8, 9, 10].map(i => (
                <div key={i} className="relative rounded-md overflow-hidden">
                  <img
                    src={`https://tools-api.webcrumbs.org/image-placeholder/200/300/drama/${i}`}
                    alt={`Movie ${i}`}
                    width={200}
                    height={300}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-title mb-4">Watch Again</h2>
            <div className="grid grid-cols-5 gap-4">
              {[11, 12, 13, 14, 15].map(i => (
                <div key={i} className="relative rounded-md overflow-hidden">
                  <img
                    src={`https://tools-api.webcrumbs.org/image-placeholder/200/300/comedy/${i}`}
                    alt={`Movie ${i}`}
                    width={200}
                    height={300}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
     </div>
  );
}

export default MainLayout;
