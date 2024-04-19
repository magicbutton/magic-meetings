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
import { Servicecatalogue } from "@/services/magic-meetings/models/servicecatalogue";
/**
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Servicecatalogue
 */
export default async function call(transactionId: string ,item: Servicecatalogue) {
  console.log( "magic-meetings.servicecatalogue", "update");

  return run<Servicecatalogue>(
    "magic-meetings.servicecatalogue",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

