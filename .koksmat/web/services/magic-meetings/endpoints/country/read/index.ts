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
import { Country } from "@/services/magic-meetings/models/country";
/**
 * Read a single item
 * 
 * id - The id of the item

 * @returns
 * 
 * Country
 */
export default async function call(transactionId: string ,id: string) {
  console.log( "magic-meetings.country", "read");

  return run<Country>(
    "magic-meetings.country",
    ["read" , id],
    transactionId,
    600,
    transactionId
  );
}

