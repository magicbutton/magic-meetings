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
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Country
 */
export default async function call(transactionId: string ,item: Country) {
  console.log( "magic-meetings.country", "update");

  return run<Country>(
    "magic-meetings.country",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

