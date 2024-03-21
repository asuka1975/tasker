"use client"

import { createSubtask } from '@/app/_domain/actions/subtaskCreateAction';
import { TaskInput } from '@/app/_domain/types/Task';
import { useFormState } from 'react-dom';
import Label from '../atom/Label';
import Button from '../atom/Button';
import CloseLinkIconButton from '../atom/CloseLinkIconButton';

type Props = {
    parentId: number
};


export default function SubtaskForm({ parentId }: Props) {
    const initialState = {
        message: null,
        errors: {}
    };
    const [state, dispatch] = useFormState(createSubtask, initialState);

    return (
        <form className="grid grid-rows-[4fr_1fr] w-full h-full" action={dispatch}>
            <div className="grid grid-rows-[1fr_4fr_1fr_1fr_1fr]">
                <div>
                    <Label>タイトル</Label>
                    <input className="w-full p-1 border-gray-200 border-[1px]" type="text" id="title" name="title" required></input>
                    {state.errors?.title ?? <div className="text-red-500">{state.errors?.title}</div>}
                </div>
                <div className="flex flex-col">
                    <Label>説明</Label>
                    <textarea className="grow self-stretch p-1 w-full border-gray-200 border-[1px] h-full" id="description" name="description" required></textarea>
                    {state.errors?.description ?? <div className="text-red-500">{state.errors?.description}</div>}
                </div>
                <div>
                    <Label>優先度</Label>
                    <input className="w-full border-gray-200 border-[1px]" type="number" id="priority" name="priority" defaultValue={0} required></input>
                    {state.errors?.priority ?? <div className="text-red-500">{state.errors?.priority}</div>}
                </div>
                <div>
                    <Label>期限</Label>
                    <input className="w-full border-gray-200 border-[1px]" type="datetime-local" id="limitAt" name="limitAt" defaultValue={getNowDateTimeString()} required></input>
                    {state.errors?.limitAt ?? <div className="text-red-500">{state.errors?.limitAt}</div>}
                </div>
                <div>
                    {state.message ?? <div className="text-red-500">{state.message}</div>}
                </div>
            </div>
            <div className="flex justify-end items-end">
                <Button type="submit">
                    追加
                </Button>
            </div>
            <input type="number" id="parentId"  name="parentId" defaultValue={parentId} required hidden></input>
        </form>
    )
}

function getNowDateTimeString() {
  const localDate = new Date(); 
  localDate.setSeconds(0);
  localDate.setMilliseconds(0);

  return localDate.toISOString().slice(0, -1);
}