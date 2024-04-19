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
import { Productionorder } from "@/services/magic-meetings/models/productionorder";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Productionorder
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-meetings.productionorder", "search");

  return run<Productionorder>(
    "magic-meetings.productionorder",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

