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
import { Serviceorder } from "@/services/magic-meetings/models/serviceorder";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Serviceorder
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-meetings.serviceorder", "search");

  return run<Serviceorder>(
    "magic-meetings.serviceorder",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

