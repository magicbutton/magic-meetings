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
import { Messagelog } from "@/services/magic-meetings/models/messagelog";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Messagelog
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-meetings.messagelog", "search");

  return run<Messagelog>(
    "magic-meetings.messagelog",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

