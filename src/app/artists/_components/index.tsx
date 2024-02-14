import {getArtists} from "@/lib/artist-db";

export default async function Index() {
  const {artists, results} = await getArtists();
console.log(artists);
  return (
    <div className="max-w-screen·flex-col px-5 md:px-20">
      {results === 0 ? (
        <p className="text-center">No releases Found</p>
      ) : (
        artists?.map((artist, index) => {
          return <h1>{artist.name}</h1>;
        })
      )}
    </div>
  );
}
