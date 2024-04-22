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
 * Delete an existing item
 * 
 * id - The id of the item

 * @returns
 * 
 * Tenant
 */
export default async function call(transactionId: string ,id: string) {
  console.log( "magic-meetings.tenant", "delete");

  return run<Tenant>(
    "magic-meetings.tenant",
    ["delete" , id],
    transactionId,
    600,
    transactionId
  );
}

