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
import { Accesspoint } from "@/services/magic-meetings/models/accesspoint";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Accesspoint
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-meetings.accesspoint", "search");

  return run<Accesspoint>(
    "magic-meetings.accesspoint",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

