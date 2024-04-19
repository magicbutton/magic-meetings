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
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Meeting
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-meetings.meeting", "search");

  return run<Meeting>(
    "magic-meetings.meeting",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

