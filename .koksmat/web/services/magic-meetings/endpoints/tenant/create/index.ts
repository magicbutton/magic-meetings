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
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Tenant
 */
export default async function call(transactionId: string ,item: Tenant) {
  console.log( "magic-meetings.tenant", "create");

  return run<Tenant>(
    "magic-meetings.tenant",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

