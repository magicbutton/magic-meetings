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
import { Meetingroom } from "@/services/magic-meetings/models/meetingroom";
/**
 * Delete an existing item
 * 
 * id - The id of the item

 * @returns
 * 
 * Meetingroom
 */
export default async function call(transactionId: string ,id: string) {
  console.log( "magic-meetings.meetingroom", "delete");

  return run<Meetingroom>(
    "magic-meetings.meetingroom",
    ["delete" , id],
    transactionId,
    600,
    transactionId
  );
}

