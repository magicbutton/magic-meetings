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
import { Signal } from "@/services/magic-meetings/models/signal";
/**
 * Read a single item
 * 
 * id - The id of the item

 * @returns
 * 
 * Signal
 */
export default async function call(transactionId: string ,id: string) {
  console.log( "magic-meetings.signal", "read");

  return run<Signal>(
    "magic-meetings.signal",
    ["read" , id],
    transactionId,
    600,
    transactionId
  );
}

