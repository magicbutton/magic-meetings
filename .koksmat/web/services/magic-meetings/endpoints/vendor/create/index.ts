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
import { Vendor } from "@/services/magic-meetings/models/vendor";
/**
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Vendor
 */
export default async function call(transactionId: string ,item: Vendor) {
  console.log( "magic-meetings.vendor", "create");

  return run<Vendor>(
    "magic-meetings.vendor",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

