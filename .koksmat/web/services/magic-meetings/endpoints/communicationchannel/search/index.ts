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
import { Communicationchannel } from "@/services/magic-meetings/models/communicationchannel";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Communicationchannel
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-meetings.communicationchannel", "search");

  return run<Communicationchannel>(
    "magic-meetings.communicationchannel",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

