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
import { Communicationchannel } from "@/services/magic-meetings/models/communicationchannel";
/**
 * Delete an existing item
 * 
 * id - The id of the item

 * @returns
 * 
 * Communicationchannel
 */
export default async function call(transactionId: string ,id: string) {
  console.log( "magic-meetings.communicationchannel", "delete");

  return run<Communicationchannel>(
    "magic-meetings.communicationchannel",
    ["delete" , id],
    transactionId,
    600,
    transactionId
  );
}

