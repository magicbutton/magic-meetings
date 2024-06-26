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
import { Messagelog } from "@/services/magic-meetings/models/messagelog";
/**
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Messagelog
 */
export default async function call(transactionId: string ,item: Messagelog) {
  console.log( "magic-meetings.messagelog", "create");

  return run<Messagelog>(
    "magic-meetings.messagelog",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

