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
import { Visitor } from "@/services/magic-meetings/models/visitor";
/**
 * Read a single item
 * 
 * id - The id of the item

 * @returns
 * 
 * Visitor
 */
export default async function call(transactionId: string ,id: string) {
  console.log( "magic-meetings.visitor", "read");

  return run<Visitor>(
    "magic-meetings.visitor",
    ["read" , id],
    transactionId,
    600,
    transactionId
  );
}

