import * as vscode from "vscode";
import * as path from "path";

export function setup() {
  const msg =
    "Welcome to Daily MD! Choose a default directory to save your notes.";
  const startOption = vscode.window.showInformationMessage(msg, ...["Start"]);

  startOption.then((value: any) => {
    if (value === "Start") {
      // Open a folder picker for user to choose note folder
      const uriSelect = vscode.window.showOpenDialog({
        canSelectFiles: false,
        canSelectFolders: true,
        canSelectMany: false,
        openLabel: "Select",
      });

      uriSelect
        .then((res: any) => {
          if (res.length > 0 && res[0].fsPath) {
            const config = vscode.workspace.getConfiguration("daily-md");
            const updateDefaultNotePath = config.update(
              "defaultNotePath",
              path.normalize(res[0].fsPath),
              true
            );
            updateDefaultNotePath.then(() => {
              vscode.window.showInformationMessage(
                "Note Path Saved."
              );
            });
          }
        })
        .catch((err: any) => {
          console.error(err);
        });
    }
  });
}
