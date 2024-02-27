import Image from "next/image";
import Subtext from "./_components/atom/Subtext";
import Priority from "./_components/atom/Priority";
import Marker from "./_components/atom/Marker";
import Title from "./_components/atom/Title";
import TaskItem from "./_components/molecule/TaskItem";
import dayjs from "dayjs";

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
        <Title>sample</Title>
        <Marker />
      </div>
      <div className="pl-1 w-96">
        {[...Array(8)].map((_, i) => {
          return (
            <TaskItem title={`sample${i}`.repeat(i + 1)} priority={i} limitAt={new Date()} key={i} />
          )
        })}

      </div>
    </main>
  );
}
