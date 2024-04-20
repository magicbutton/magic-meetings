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
import { Auditlog } from "@/services/magic-meetings/models/auditlog";
/**
 * Delete an existing item
 * 
 * id - The id of the item

 * @returns
 * 
 * Auditlog
 */
export default async function call(transactionId: string ,id: string) {
  console.log( "magic-meetings.auditlog", "delete");

  return run<Auditlog>(
    "magic-meetings.auditlog",
    ["delete" , id],
    transactionId,
    600,
    transactionId
  );
}

