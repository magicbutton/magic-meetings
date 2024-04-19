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
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Meetingroom
 */
export default async function call(transactionId: string ,item: Meetingroom) {
  console.log( "magic-meetings.meetingroom", "create");

  return run<Meetingroom>(
    "magic-meetings.meetingroom",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

