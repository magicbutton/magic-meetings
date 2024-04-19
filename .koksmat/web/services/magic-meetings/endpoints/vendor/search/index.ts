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
import { Vendor } from "@/services/magic-meetings/models/vendor";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Vendor
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-meetings.vendor", "search");

  return run<Vendor>(
    "magic-meetings.vendor",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

