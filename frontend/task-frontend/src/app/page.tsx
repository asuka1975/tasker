import Image from "next/image";
import Subtext from "./_components/atom/Subtext";
import Priority from "./_components/atom/Priority";

export default function Home() {
  return (
    <main className="">
      <div className="flex items-center gap-1">
        <Subtext>sample</Subtext>
        {[...Array(8)].map((_, i) => {
          return (
            <Priority key={i} priority={i}></Priority>
          )
        })}
      </div>
    </main>
  );
}
