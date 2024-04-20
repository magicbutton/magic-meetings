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
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Auditlog
 */
export default async function call(transactionId: string ,item: Auditlog) {
  console.log( "magic-meetings.auditlog", "create");

  return run<Auditlog>(
    "magic-meetings.auditlog",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

