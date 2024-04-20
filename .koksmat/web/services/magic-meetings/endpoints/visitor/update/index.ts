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
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Visitor
 */
export default async function call(transactionId: string ,item: Visitor) {
  console.log( "magic-meetings.visitor", "update");

  return run<Visitor>(
    "magic-meetings.visitor",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

