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
import { Building } from "@/services/magic-meetings/models/building";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Building
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-meetings.building", "search");

  return run<Building>(
    "magic-meetings.building",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

