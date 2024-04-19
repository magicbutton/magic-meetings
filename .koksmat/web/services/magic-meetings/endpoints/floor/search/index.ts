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
import { Floor } from "@/services/magic-meetings/models/floor";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Floor
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-meetings.floor", "search");

  return run<Floor>(
    "magic-meetings.floor",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

