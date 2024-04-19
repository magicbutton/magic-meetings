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
import { Meeting } from "@/services/magic-meetings/models/meeeting";
/**
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Meeting
 */
export default async function call(transactionId: string ,item: Meeting) {
  console.log( "magic-meetings.meeting", "create");

  return run<Meeting>(
    "magic-meetings.meeting",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

