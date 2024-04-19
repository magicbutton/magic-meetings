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
import { Serviceorder } from "@/services/magic-meetings/models/serviceorder";
/**
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Serviceorder
 */
export default async function call(transactionId: string ,item: Serviceorder) {
  console.log( "magic-meetings.serviceorder", "update");

  return run<Serviceorder>(
    "magic-meetings.serviceorder",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

