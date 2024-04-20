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
import { Accesspass } from "@/services/magic-meetings/models/accesspass";
/**
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Accesspass
 */
export default async function call(transactionId: string ,item: Accesspass) {
  console.log( "magic-meetings.accesspass", "update");

  return run<Accesspass>(
    "magic-meetings.accesspass",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

