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
import { Service } from "@/services/magic-meetings/models/service";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Service
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-meetings.service", "search");

  return run<Service>(
    "magic-meetings.service",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

