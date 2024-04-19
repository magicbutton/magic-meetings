"use server";
/*
Parameters

*/
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import { run } from "@/koksmat/magicservices";
import { ShowCodeFragment } from "@/services/ShowCodeFragment";
import { Task } from "@/services/magic-meetings/models/task";
/**
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Task
 */
export default async function call(transactionId: string ,item: Task) {
  console.log( "magic-meetings.task", "create");

  return run<Task>(
    "magic-meetings.task",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

