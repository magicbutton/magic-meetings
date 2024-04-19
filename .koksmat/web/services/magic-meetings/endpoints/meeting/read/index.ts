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
 * Read a single item
 * 
 * id - The id of the item

 * @returns
 * 
 * Meeting
 */
export default async function call(transactionId: string ,id: string) {
  console.log( "magic-meetings.meeting", "read");

  return run<Meeting>(
    "magic-meetings.meeting",
    ["read" , id],
    transactionId,
    600,
    transactionId
  );
}

