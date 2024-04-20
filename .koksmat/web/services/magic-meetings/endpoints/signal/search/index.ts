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
import { Signal } from "@/services/magic-meetings/models/signal";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Signal
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-meetings.signal", "search");

  return run<Signal>(
    "magic-meetings.signal",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

