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
import { Servicecategory } from "@/services/magic-meetings/models/servicecategory";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Servicecategory
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-meetings.servicecategory", "search");

  return run<Servicecategory>(
    "magic-meetings.servicecategory",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

