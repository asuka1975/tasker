"use client"

import Subtext from "../_components/atom/Subtext";
import Priority from "../_components/atom/Priority";
import Marker from "../_components/atom/Marker";
import Title from "../_components/atom/Title";
import TaskItem from "../_components/molecule/TaskItem";
import dayjs from "dayjs";
import LimitWarningIcon from "../_components/atom/LimitWarningIcon";
import LimitOverIcon from "../_components/atom/LimitOverIcon";
import LimitInfoIcon from "../_components/atom/LimitInfoIcon";
import TaskTree from "../_components/organism/TaskTree";
import { MockTaskRepository } from "../_domain/repository/MockTaskRepository";
import CloseIconButton from "../_components/atom/CloseIconButton";
import ModalPanel from "../_components/molecule/ModalPanel";
import Link from "next/link";

const limits: Date[] = [
  dayjs().subtract(1, 'd').toDate(),
  dayjs().add(2, 'd').toDate(),
  dayjs().add(6, 'd').toDate(),
  dayjs().add(10, 'd').toDate(),
  dayjs().add(14, 'd').toDate(),
  dayjs().add(18, 'd').toDate(),
  dayjs().add(20, 'd').toDate(),
  dayjs().add(24, 'd').toDate(),
]

export default function Home() {
  const taskRepository = new MockTaskRepository();

  return (
    <main>
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
      <div className="flex gap-1">
        <LimitInfoIcon />
        <LimitWarningIcon />
        <LimitOverIcon />
      </div>

      <CloseIconButton className="p-2" onClick={() => {}} />

      <div className="bg-black w-96 p-1">
        <ModalPanel onClose={() => {}}>
          {"a"}
        </ModalPanel>
      </div>

      <Link href="/cookbook/task/1">task</Link>

      <div className="pl-1 w-96">
        {[...Array(8)].map((_, i) => {
          return (
            <TaskItem id={i} title={`sample${i}`.repeat(i + 1)} priority={i} limitAt={limits[i]} key={i} />
          )
        })}
      </div>
      <div className="pl-1 w-96">
        <TaskTree id={0} title={"sample".repeat(10)} priority={1} limitAt={new Date()} subtasks={[1, 2, 3]} taskRepository={taskRepository} />
      </div>
    </main>
  );
}
