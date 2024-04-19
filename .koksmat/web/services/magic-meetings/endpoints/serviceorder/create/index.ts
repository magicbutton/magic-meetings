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
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Serviceorder
 */
export default async function call(transactionId: string ,item: Serviceorder) {
  console.log( "magic-meetings.serviceorder", "create");

  return run<Serviceorder>(
    "magic-meetings.serviceorder",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

