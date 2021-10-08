import * as vscode from "vscode";
import { createLocal, createDefault } from "./commands/createNote";
import { setup } from "./commands/setup";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let createLocalDisposable = vscode.commands.registerCommand(
    "daily-md.createLocal",
    createLocal
  );
  context.subscriptions.push(createLocalDisposable);

  let createDefaultDisposable = vscode.commands.registerCommand(
    "daily-md.createDefault",
    createDefault
  );
  context.subscriptions.push(createDefaultDisposable);

  let setupDisposable = vscode.commands.registerCommand(
    "daily-md.setup",
    setup
  );

  try {
    context.subscriptions.push(setupDisposable);
  } catch (error) {
    console.error(error);
  }
}
