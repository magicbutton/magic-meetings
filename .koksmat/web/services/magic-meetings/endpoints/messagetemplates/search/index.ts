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
import { Messagetemplates } from "@/services/magic-meetings/models/messagetemplates";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Messagetemplates
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-meetings.messagetemplates", "search");

  return run<Messagetemplates>(
    "magic-meetings.messagetemplates",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

