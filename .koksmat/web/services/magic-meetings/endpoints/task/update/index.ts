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
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Task
 */
export default async function call(transactionId: string ,item: Task) {
  console.log( "magic-meetings.task", "update");

  return run<Task>(
    "magic-meetings.task",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

