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
import { Site } from "@/services/magic-meetings/models/site";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Site
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-meetings.site", "search");

  return run<Site>(
    "magic-meetings.site",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

