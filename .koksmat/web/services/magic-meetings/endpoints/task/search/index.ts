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
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Task
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-meetings.task", "search");

  return run<Task>(
    "magic-meetings.task",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

