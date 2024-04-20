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
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Signal
 */
export default async function call(transactionId: string ,item: Signal) {
  console.log( "magic-meetings.signal", "update");

  return run<Signal>(
    "magic-meetings.signal",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

