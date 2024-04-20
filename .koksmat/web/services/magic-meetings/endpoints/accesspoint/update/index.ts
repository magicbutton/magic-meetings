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
import { Accesspoint } from "@/services/magic-meetings/models/accesspoint";
/**
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Accesspoint
 */
export default async function call(transactionId: string ,item: Accesspoint) {
  console.log( "magic-meetings.accesspoint", "update");

  return run<Accesspoint>(
    "magic-meetings.accesspoint",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

