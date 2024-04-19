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
import { Meeting } from "@/services/magic-meetings/models/meeting";
/**
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Meeting
 */
export default async function call(transactionId: string ,item: Meeting) {
  console.log( "magic-meetings.meeting", "update");

  return run<Meeting>(
    "magic-meetings.meeting",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

