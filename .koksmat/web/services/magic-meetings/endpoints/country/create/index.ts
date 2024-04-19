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
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Country
 */
export default async function call(transactionId: string ,item: Country) {
  console.log( "magic-meetings.country", "create");

  return run<Country>(
    "magic-meetings.country",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

