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
import { Account } from "@/services/magic-meetings/models/account";
/**
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Account
 */
export default async function call(transactionId: string ,item: Account) {
  console.log( "magic-meetings.account", "create");

  return run<Account>(
    "magic-meetings.account",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

