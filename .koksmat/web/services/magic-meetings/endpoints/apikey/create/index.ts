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
import { Apikey } from "@/services/magic-meetings/models/apikey";
/**
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Apikey
 */
export default async function call(transactionId: string ,item: Apikey) {
  console.log( "magic-meetings.apikey", "create");

  return run<Apikey>(
    "magic-meetings.apikey",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

