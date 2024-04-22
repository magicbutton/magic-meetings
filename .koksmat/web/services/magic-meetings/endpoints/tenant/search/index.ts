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
import { Tenant } from "@/services/magic-meetings/models/tenant";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Tenant
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-meetings.tenant", "search");

  return run<Tenant>(
    "magic-meetings.tenant",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

