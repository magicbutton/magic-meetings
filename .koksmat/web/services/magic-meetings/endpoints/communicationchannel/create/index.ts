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
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Communicationchannel
 */
export default async function call(transactionId: string ,item: Communicationchannel) {
  console.log( "magic-meetings.communicationchannel", "create");

  return run<Communicationchannel>(
    "magic-meetings.communicationchannel",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

