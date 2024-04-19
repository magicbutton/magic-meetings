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
import { Messagetemplates } from "@/services/magic-meetings/models/messagetemplates";
/**
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Messagetemplates
 */
export default async function call(transactionId: string ,item: Messagetemplates) {
  console.log( "magic-meetings.messagetemplates", "update");

  return run<Messagetemplates>(
    "magic-meetings.messagetemplates",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

