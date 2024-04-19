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
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Meetingroom
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-meetings.meetingroom", "search");

  return run<Meetingroom>(
    "magic-meetings.meetingroom",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

