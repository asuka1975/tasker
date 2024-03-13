"use client"

import Subtext from "../../_components/atom/Subtext";
import Priority from "../../_components/atom/Priority";
import Marker from "../../_components/atom/Marker";
import Title from "../../_components/atom/Title";
import TaskItem from "../../_components/molecule/TaskItem";
import dayjs from "dayjs";
import LimitWarningIcon from "../../_components/atom/LimitWarningIcon";
import LimitOverIcon from "../../_components/atom/LimitOverIcon";
import LimitInfoIcon from "../../_components/atom/LimitInfoIcon";
import TaskTree from "../../_components/organism/TaskTree";
import CloseIconButton from "../../_components/atom/CloseIconButton";
import ModalPanel from "../../_components/molecule/ModalPanel";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Task, taskArraySchema, taskSchema } from "../../_domain/types/Task";

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

export default function Cookbook() {
  const [rootTasks, setRootTasks] = useState<Task[]>([]);
  const [subtasks, setSubtasks] = useState<Map<number, number[]>>();

  useEffect(() => {
    getRootTasks()
      .then(r => {
        setRootTasks(r)
      })
  }, [])

  useEffect(() => {
    const f = async () => {
      const m = new Map<number, number[]>();
      for(const task of rootTasks) {
        const tasks = await getSubtasks(task.id);
        m.set(task.id, tasks.map(t => t.id));
      }
      return m;
    }

    f().then(task => setSubtasks(task))
  }, rootTasks);

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
            <TaskItem id={i} title={`sample${i}`.repeat(i + 1)} priority={i} limitAt={limits[i]} key={i} completed={i % 2 === 0} />
          )
        })}
      </div>
      <div className="pl-1 w-96">
        {
            rootTasks.map((task) => (
              <TaskTree id={task.id} title={task.title} priority={task.priority} limitAt={task.limitAt} completed={task.completed} subtasks={subtasks?.get(task.id) ?? []} key={task.id} />
            ))
        }
      </div>
    </main>
  );
}

async function getRootTasks() {
  const rootTasks = await fetch(`/api/v1/cookbook/task?rootOnly=true`, {
    next: {
      revalidate: 20
    }
  })
  .then(r => r.json())
  .then(j => taskArraySchema.parse(j))

  return rootTasks;
}

async function getSubtasks(id: number) {
  const task = await fetch(`/api/v1/cookbook/task/${id}/children`, {
    next: {
      revalidate: 20
    }
  })
  .then(r => r.json())
  .then(j => taskArraySchema.parse(j))

  return task;
}