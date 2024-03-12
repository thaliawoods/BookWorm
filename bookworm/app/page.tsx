import Head from "next/head";
import MovieSearch from "./components/MovieSearch";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Head>
          <title>BookWorm</title>
          <meta name="description" content="A simple Book database for uses"></meta>
      </Head>

      <main className="container mx auto py-10 px-4 flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-white">BookWorm</h1>
      </main>

      <SearchBar></SearchBar>
      <MovieSearch></MovieSearch> 
      <MovieCard></MovieCard>

      
    </div>

  );
}