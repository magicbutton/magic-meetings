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
 * Delete an existing item
 * 
 * id - The id of the item

 * @returns
 * 
 * Messagetemplates
 */
export default async function call(transactionId: string ,id: string) {
  console.log( "magic-meetings.messagetemplates", "delete");

  return run<Messagetemplates>(
    "magic-meetings.messagetemplates",
    ["delete" , id],
    transactionId,
    600,
    transactionId
  );
}

