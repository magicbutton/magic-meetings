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
import { Apikey } from "@/services/magic-meetings/models/apikey";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Apikey
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-meetings.apikey", "search");

  return run<Apikey>(
    "magic-meetings.apikey",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

