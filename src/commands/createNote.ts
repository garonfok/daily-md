import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { format } from 'date-fns';

const workspaces = vscode.workspace.workspaceFolders;
const config = vscode.workspace.getConfiguration("daily-md");
const defaultFolder = config.get("defaultNotePath");

export function createLocal() {
  let today = format(new Date(), "PPP");
  let todayISO = new Date().toISOString().substring(0, 10);

  if (!workspaces) {
    vscode.window.showErrorMessage(
      "Hold up, your workspace doesn't have a folder open. " +
        "Open a folder, and try again."
    );
  } else if (workspaces.length === 1) {
    createNote(workspaces[0].uri.fsPath);
  } else {
    const workSpaceList: any[] | Thenable<any[]> = [];
    workspaces.forEach((workspace) => {
      workSpaceList.push(workspace.uri.fsPath);
    });
    // Show dialog and ask which workspace to use.
    vscode.window.showQuickPick(workSpaceList).then(workspacePath => {
      console.log(`${workspacePath} selected`);
      workspaces.forEach(workspace => {
        if (workspace.uri.fsPath === workspacePath) {
          console.log(workspace.name);
          const uriSelect = workspace.uri;
          console.log(uriSelect);
          createNote(uriSelect.fsPath);
        }
      });
    });
  }
}

export function createDefault() {
  if (!defaultFolder) {
    vscode.window.showErrorMessage(
      "Hold up, you don't have a default notes folder yet. You need to run setup again."
    );
  } else {
    createNote(defaultFolder);
  }
}

function createNote(folder: string) {
  let today = format(new Date(), "PPP");
  let todayISO = new Date().toISOString().substring(0, 10);

  const noteFileName = `${todayISO}.md`;
  const filePath = path.join(folder, noteFileName);
  if (fs.existsSync(filePath)) {
    vscode.window.showErrorMessage(`"${filePath}" already exists.`);
  } else {
    vscode.window.showTextDocument(vscode.Uri.file(filePath)).then(() => {
      console.log(`${noteFileName} created.`);
    });

    fs.promises.writeFile(
      filePath,
      fs.readFileSync(path.resolve(__dirname, '../../src/template.md'), 'utf8').toString()
    );

    vscode.window.showInformationMessage(
      `New Markdown file created for ${today}`
    );
  }
}
