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
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Communicationchannel
 */
export default async function call(transactionId: string ,item: Communicationchannel) {
  console.log( "magic-meetings.communicationchannel", "update");

  return run<Communicationchannel>(
    "magic-meetings.communicationchannel",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

